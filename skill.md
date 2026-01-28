---
name: moss-docs
description: Build and maintain Moss documentation. Use when creating docs pages,
  updating SDK references, adding integration guides, or configuring navigation.
license: MIT
compatibility: Requires Node.js for Mintlify CLI. Works with any Git-based workflow.
metadata:
  author: usemoss
  version: "1.0"
  docs-url: https://docs.usemoss.dev
---

# Moss Documentation Best Practices

**Always consult [docs.usemoss.dev](https://docs.usemoss.dev) for the latest documentation and [mintlify.com/docs](https://mintlify.com/docs) for Mintlify components and configuration.**

Moss is the real-time semantic search runtime for conversational AI. This repository contains the official documentation deployed at [docs.usemoss.dev](https://docs.usemoss.dev), built with Mintlify.

## Quick reference

### CLI commands

* `npm i -g mint` - Install the Mintlify CLI
* `mint dev` - Local preview at localhost:3000
* `mint update` - Update to latest Mintlify version
* `mint broken-links` - Check internal links
* `mint validate` - Validate documentation builds

### Required files

* `docs.json` - Site configuration (navigation, theme, integrations). **Never use `mint.json`** (deprecated)
* `*.mdx` files - Documentation pages with YAML frontmatter

### Repository structure

```
moss-docs/
├── docs.json                    # Site configuration
├── docs/
│   ├── index.mdx               # Homepage (custom mode)
│   ├── start/                  # Getting started guides
│   │   ├── what-is-moss.mdx
│   │   ├── quickstart.mdx
│   │   └── core-concepts.mdx
│   ├── integrate/              # How it works
│   │   ├── authentication.mdx
│   │   ├── indexing-data.mdx
│   │   ├── retrieval.mdx
│   │   └── storage-persistence.mdx
│   ├── build/                  # Use cases
│   │   ├── offline-first-search.mdx
│   │   └── voice-agent-livekit.mdx
│   ├── integrations/           # Third-party integrations
│   │   ├── livekit.mdx
│   │   └── pipecat.mdx
│   ├── reference/              # SDK reference
│   │   ├── sdk.mdx
│   │   ├── js/                 # JavaScript SDK docs
│   │   └── python/             # Python SDK docs
│   └── api-reference/          # REST API reference
│       └── v1/
├── snippets/                   # Reusable MDX components
│   ├── next-steps.mdx
│   └── start-next-steps.mdx
└── logo/                       # Brand assets
```

## Navigation structure

The site uses **tabs** as the primary navigation pattern in `docs.json`:

| Tab | Purpose |
|-----|---------|
| **Home** | Landing page with hero and quickstart link |
| **Platform** | Getting started, use cases, how it works |
| **SDK** | JavaScript and Python SDK reference |
| **API Reference** | REST API endpoints (v1) |
| **Integrations** | Third-party integrations (LiveKit, Pipecat) |
| **Release Notes** | Changelog |

### Adding new pages

1. Create the `.mdx` file in the appropriate directory
2. Add the page path to `docs.json` navigation
3. Use root-relative paths without extensions: `/docs/start/quickstart`

## Content patterns

### Page frontmatter

Every MDX file requires frontmatter:

```yaml
---
title: "Page Title"
description: "Brief description for SEO and navigation"
---
```

Optional frontmatter:
- `mode: "wide"` - Full-width layout
- `mode: "custom"` - Custom layout (used for homepage)

### Dual-language code examples

Always provide both JavaScript and Python examples using `<CodeGroup>`:

````mdx
<CodeGroup>
```ts JavaScript
import { MossClient } from '@inferedge/moss'
const client = new MossClient(projectId, projectKey)
await client.createIndex('faqs', docs, 'moss-minilm')
```
```python Python
from inferedge_moss import MossClient
client = MossClient(project_id, project_key)
await client.create_index("faqs", documents, "moss-minilm")
```
</CodeGroup>
````

### Step-by-step guides

Use `<Steps>` for sequential instructions:

````mdx
<Steps>
<Step title="Install">
<CodeGroup>
```bash JavaScript
npm install @inferedge/moss
```
```bash Python
pip install inferedge-moss
```
</CodeGroup>
</Step>

<Step title="Configure credentials">
Set environment variables...
</Step>
</Steps>
````

### Reusable snippets

Import shared content from `/snippets/`:

````mdx
import StartNextSteps from '/snippets/start-next-steps.mdx';

<StartNextSteps />
````

### Callouts

Use appropriate callout components:

- `<Tip>` - Best practices and recommendations
- `<Note>` - Supplementary information
- `<Warning>` - Destructive actions or important caveats

## Moss SDK reference

### Package names

| Language | Package | Install |
|----------|---------|---------|
| JavaScript/TypeScript | `@inferedge/moss` | `npm install @inferedge/moss` |
| Python | `inferedge-moss` | `pip install inferedge-moss` |

### Models

| Model | Description |
|-------|-------------|
| `moss-minilm` | Default. Fast, lightweight, great for edge/offline |
| `moss-mediumlm` | Higher accuracy with reasonable performance |

### Hybrid search (`alpha` parameter)

- `alpha: 1.0` - Pure semantic (embeddings)
- `alpha: 0.0` - Pure keyword (BM25)
- `alpha: 0.6` - Blend (60% semantic, 40% keyword)
- Default is semantic-heavy (~0.8)

### Method naming conventions

| JavaScript | Python |
|------------|--------|
| `createIndex()` | `create_index()` |
| `loadIndex()` | `load_index()` |
| `deleteIndex()` | `delete_index()` |
| `addDocs()` | `add_docs()` |
| `deleteDocs()` | `delete_docs()` |
| `getDocs()` | `get_docs()` |
| `query()` | `query()` |

## API reference

### Authentication

All API requests require:
- `projectId` in JSON body
- `x-project-key` header
- `x-service-version: v1` header

```bash
curl -X POST "https://service.usemoss.dev/manage" \
  -H "Content-Type: application/json" \
  -H "x-service-version: v1" \
  -H "x-project-key: moss_access_key_xxxxx" \
  -d '{"action": "listIndexes", "projectId": "project_123"}'
```

### API endpoints structure

API reference pages are organized under `docs/api-reference/v1/`:
- `getting-started/` - Introduction, authentication, overview
- `index-management/` - createIndex, getIndex, listIndex, deleteIndex
- `document-operations/` - addDocs, getDocs, deleteDocs

## Integration guides

When documenting integrations (LiveKit, Pipecat, etc.):

1. Start with "Why Use Moss with X?" section
2. List required tools/dependencies
3. Use `<Steps>` for the integration guide
4. Include complete, runnable code examples
5. Show environment setup with `.env` examples

### Integration pattern: Context Injection

For voice agents, document the context injection pattern:
1. Automatic search on every user message
2. Inject results into conversation context
3. LLM responds with knowledge-grounded answer

## Common gotchas

1. **Use `docs.json` not `mint.json`** - `mint.json` is deprecated
2. **Frontmatter required** - Every MDX file needs at least `title`
3. **Code block language** - Always specify language identifier
4. **Dual-language examples** - Always provide JS and Python versions
5. **Async/await** - All SDK methods are async; show proper async patterns
6. **Environment variables** - Use `MOSS_PROJECT_ID` and `MOSS_PROJECT_KEY`

## Links and resources

### Internal linking

- Use root-relative paths without extensions: `/docs/start/quickstart`
- Images in `/logo/` directory: `/logo/moss-wordmark-dark.svg`

### External resources

- Documentation: [docs.usemoss.dev](https://docs.usemoss.dev)
- Portal: [portal.usemoss.dev](https://portal.usemoss.dev)
- Samples: [github.com/usemoss/moss-samples](https://github.com/usemoss/moss-samples)
- Discord: [discord.gg/eMXExuafBR](https://discord.gg/eMXExuafBR)
- Mintlify docs: [mintlify.com/docs](https://mintlify.com/docs)
