---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MOSS Client SDKs"
  text: "For blazing-fast semantic search"
  tagline: "Get real-time retrieval for your conversational AI, voice assistants, and multimodal agents"
  actions:
    - theme: brand
      text: Start Building
      link: /getting-started
    - theme: alt
      text: JavaScript SDK
      link: /reference/js/README.md
    - theme: alt
      text: Python SDK
      link: /reference/python/README.md

features:
  - title: Zero-Hop Latency
    details: Sub-10 ms retrieval from device memory - no internet delay. Answers feel instant and human-like.
  - title: Model-Agnostic
    details: Works with any AI model - no vendor lock-in. Bring your own embeddings or use our optimized defaults.
  - title: Offline-First, Cloud-Smart
    details: Runs offline with cloud-powered sync and analytics. Zero infrastructure overhead, fully managed hybrid retrieval.
---

<br/>
<br/>

# Why Moss

Moss is a high-performance runtime for real-time semantic search. It delivers sub-10 ms retrieval, instant index updates, and zero infrastructure overhead. It runs wherever your intelligence lives—in-browser, on-device, or in the cloud—so search feels native and effortless.

## Key Benefits

- **Zero-Hop Latency** — Answers from device memory in <10 ms with no internet delay
- **Model-Agnostic** — Works with any AI model, no vendor lock-in
- **Offline-First, Cloud-Smart** — Runs offline with cloud-powered sync and analytics
- **Zero Infrastructure Overhead** — Fully managed hybrid cloud and on-device retrieval

## Common Use Cases

Where teams are putting Moss to work today:

- **Copilot Memory** — Recall user context instantly, even offline
- **Docs Search** — Fast, private search inside help centers
- **Desktop Productivity** — Smart search in note apps or IDEs without sending data online
- **AI-Native Apps** — Sub-10ms search on phones and AI-PCs with no lag even on bad networks

## Quick Start

::: code-group

```bash [npm]
npm install @inferedge/moss
```

```bash [pip]
pip install inferedge-moss
```

:::

::: code-group

```ts [JavaScript]
import { MossClient } from '@inferedge/moss'

const client = new MossClient(process.env.PROJECT_ID!, process.env.PROJECT_KEY!)
await client.createIndex('docs', [{ id: '1', text: 'Vector search in production' }], 'moss-minilm')

await client.loadIndex("docs")
const results = await client.query('docs', 'production search tips')
```

```py [Python]
from inferedge_moss import MossClient, DocumentInfo

client = MossClient("$PROJECT_ID", "$PROJECT_KEY")
await client.create_index(
    "docs",
    [DocumentInfo(id="1", text="Vector search in production")],
    "moss-minilm",
)

await client.load_index("docs")
results = await client.query("docs", "production search tips")
```

:::

For detailed setup instructions, credentials configuration, and more examples, see the [Getting Started](/getting-started) guide.

## Next steps

| Task | Where to look |
| --- | --- |
| Project setup & credentials | [Getting Started](/getting-started) |
| JavaScript usage & API docs | [JavaScript SDK](/reference/js/README.md) |
| Python usage & API docs | [Python SDK](/reference/python/README.md) |


## 📬 Contact

For queries, support, commercial licensing, or partnership inquiries, contact us: [contact@usemoss.dev](mailto:contact@usemoss.dev)
