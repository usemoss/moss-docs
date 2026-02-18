---
name: moss-docs
description: Documentation and capabilities reference for Moss semantic search. Use for understanding Moss APIs, SDKs, and integration patterns.
metadata:
  author: moss
  version: "1.0"
  docs-url: https://docs.moss.dev
---

# Moss Agent Skills

## Capabilities

Moss is the real-time semantic search runtime for conversational AI. It delivers sub-10ms lookups and instant index updates that run in the browser, on-device, or in the cloud - wherever your agent lives. Agents can create indexes, embed documents, perform semantic/hybrid searches, and manage document lifecycles without managing infrastructure. The platform handles embedding generation, index persistence, and optional cloud sync - allowing agents to focus on retrieval logic rather than infrastructure.

## Skills

### Index Management
- **Create Index**: Build a new semantic index with documents and embedding model selection
- **Load Index**: Load an existing index from persistent storage for querying
- **Get Index**: Retrieve metadata about a specific index (document count, model, etc.)
- **List Indexes**: Enumerate all indexes under a project
- **Delete Index**: Remove an index and all associated data

### Document Operations
- **Add Documents**: Insert or upsert documents into an existing index with optional metadata
- **Get Documents**: Retrieve stored documents by ID or fetch all documents
- **Delete Documents**: Remove specific documents from an index by their IDs

### Search & Retrieval
- **Semantic Search**: Query using natural language with vector similarity matching
- **Keyword Search**: Use BM25-based keyword matching for exact term lookups
- **Hybrid Search**: Blend semantic and keyword search with configurable alpha weighting
- **Metadata Filtering**: Constrain results by document metadata (category, language, tags)
- **Top-K Results**: Return configurable number of best-matching documents with scores

### Embedding Models
- **moss-minilm**: Fast, lightweight model optimized for edge/offline use (default)
- **moss-mediumlm**: Higher accuracy model with reasonable performance for precision-critical use cases
- **custom**: Use when providing pre-computed embeddings from external sources. No embedding model is loaded; all documents must include `embedding` vectors, and all queries must provide embeddings via `QueryOptions.embedding`

### Client Initialization

```typescript
// JavaScript
const client = new MossClient('your-project-id', 'your-project-key')
```

```python
# Python
client = MossClient(project_id='your-project-id', project_key='your-project-key')
```

### SDK Methods

| JavaScript | Python | Description | Returns |
|------------|--------|-------------|---------|
| `createIndex(indexName, docs, options?)` | `create_index(name, docs, model_id?)` | Create index with documents (async job) | `MutationResult` |
| `loadIndex(indexName, options?)` | `load_index(name, auto_refresh?, polling_interval_in_seconds?)` | Load index from storage | `string` (index name) |
| `getIndex(indexName)` | `get_index(name)` | Get index metadata | `IndexInfo` |
| `listIndexes()` | `list_indexes()` | List all indexes | `IndexInfo[]` |
| `deleteIndex(indexName)` | `delete_index(name)` | Delete an index | `boolean` |
| `addDocs(indexName, docs, options?)` | `add_docs(name, docs, options?)` | Add/upsert documents (async job) | `MutationResult` |
| `getDocs(indexName, options?)` | `get_docs(name, options?)` | Retrieve documents | `DocumentInfo[]` |
| `deleteDocs(indexName, docIds, options?)` | `delete_docs(name, doc_ids)` | Remove documents (async job) | `MutationResult` |
| `getJobStatus(jobId)` | `get_job_status(job_id)` | Poll async job status | `JobStatusResponse` |
| - | `unload_index(name)` | Unload index from memory | - |
| `query(indexName, query, options?)` | `query(name, query, options?)` | Semantic search (cloud fallback if not loaded locally) | `SearchResult` |

### API Actions
All REST API operations go through `POST /manage` with an `action` field:
- `createIndex` - Create index with seed documents
- `getIndex` - Get metadata for single index
- `listIndexes` - List all project indexes
- `deleteIndex` - Remove index and assets
- `addDocs` - Upsert documents into index
- `getDocs` - Retrieve stored documents
- `deleteDocs` - Remove documents by ID

## Workflows

### Basic Semantic Search Workflow
1. Initialize MossClient with project credentials
2. Call `createIndex()` with documents and model (`moss-minilm` or `moss-mediumlm`)
3. Call `loadIndex()` to prepare index for queries
4. Call `query()` with search text and top_k parameter
5. Process returned documents with scores

### Hybrid Search Workflow
1. Create and load index as above
2. Call `query()` with alpha parameter to blend semantic and keyword
3. `alpha: 1.0` = pure semantic, `alpha: 0.0` = pure keyword, `alpha: 0.6` = 60/40 blend
4. Default is semantic-heavy (~0.8) for conversational use cases

### Document Update Workflow
1. Initialize client and ensure index exists
2. Call `addDocs()` with new documents and `upsert: true` option
3. Existing documents with matching IDs are updated; new IDs are inserted
4. Call `deleteDocs()` to remove outdated documents by ID

### Voice Agent Context Injection Workflow
1. Initialize MossClient and load index at agent startup
2. On each user message, automatically query Moss for relevant context
3. Inject search results into LLM context before generating response
4. Respond with knowledge-grounded answer (no tool-calling latency)

### Offline-First Search Workflow
1. Create index with documents using local embedding model
2. Load index from local storage
3. Query runs entirely on-device with sub-10ms latency
4. Optionally sync to cloud for backup and sharing

## Integration

### Voice Agent Frameworks
- **LiveKit**: Context injection into voice agent pipeline using the `inferedge-moss` SDK directly. Uses `on_user_turn_completed` hook to query Moss and inject results into chat context before LLM generation.
- **Pipecat**: Pipeline processor via `pipecat-moss` package (`MossRetrievalService`). Sits between user input and LLM in the pipeline, auto-injecting retrieval results. Initialized with `project_id`, `project_key`, and optional `system_prompt`. Use `.load_index(index_name)` then `.query(index_name, top_k, alpha)` as a pipeline processor.

## Context

### Authentication
SDK requires project credentials:
- `MOSS_PROJECT_ID`: Project identifier from Moss Portal
- `MOSS_PROJECT_KEY`: Project access key from Moss Portal

```bash
export MOSS_PROJECT_ID=your_project_id
export MOSS_PROJECT_KEY=your_project_key
```

REST API requires headers:
- `x-project-key`: Project access key
- `x-service-version: v1`: API version header
- `projectId` in JSON body

### Package Installation

| Language | Package | Install Command |
|----------|---------|-----------------|
| JavaScript/TypeScript | `@inferedge/moss` | `npm install @inferedge/moss` |
| Python | `inferedge-moss` | `pip install inferedge-moss` |
| Pipecat Integration | `pipecat-moss` | `pip install pipecat-moss` |

### Document Schema
```typescript
interface DocumentInfo {
  id: string;              // Required: unique identifier
  text: string;            // Required: content to embed and search
  metadata?: object;       // Optional: key-value pairs for filtering
  embedding?: number[];    // Optional: caller-provided embedding vector (required when model is "custom")
}
```

### Query Parameters (QueryOptions)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `indexName` | string | - | Target index name (required) |
| `query` | string | - | Natural language search text (required) |
| `top_k` / `topK` | number | 5 | Max results to return |
| `alpha` | float | ~0.8 | Hybrid weighting: 0.0=keyword, 1.0=semantic |
| `embedding` | number[] / Sequence[float] | - | Caller-provided embedding vector; skips embedding generation when supplied |
| `filters` | object | - | Metadata constraints |

### Search Result Schema

```typescript
interface SearchResult {
  docs: QueryResultDocumentInfo[];  // Matching documents ordered by similarity
  query: string;                    // The original search query
  indexName?: string;               // Name of the index searched (index_name in Python)
  timeTakenInMs?: number;           // Search execution time in ms (time_taken_ms in Python)
}

interface QueryResultDocumentInfo extends DocumentInfo {
  score: number;  // Similarity score (0-1, higher = more similar)
}
```

### Index Info Schema

```typescript
interface IndexInfo {
  id: string;            // Unique identifier of the index
  name: string;          // Human-readable name
  version: string | null; // Index build/format version (semver)
  status: string;        // "NotStarted" | "Building" | "Ready" | "Failed"
  docCount: number;      // Number of documents (doc_count in Python)
  createdAt: string;     // ISO 8601 creation timestamp (created_at in Python)
  updatedAt: string;     // ISO 8601 last updated timestamp (updated_at in Python)
  model: ModelRef;       // Embedding model reference
}

interface ModelRef {
  id: string | null;      // Model identifier
  version: string | null; // Model version (semver/commit)
}
```

### Mutation & Job Interfaces

```typescript
// Result returned by async mutation operations (createIndex, addDocs, deleteDocs)
interface MutationResult {
  jobId: string;         // Job identifier for polling (job_id in Python)
  indexName: string;     // Name of the affected index (index_name in Python)
  docCount: number;      // Number of documents affected (doc_count in Python)
}

// Options for mutation operations
interface MutationOptions {
  upsert?: boolean;               // Default: true. Update existing documents with same ID
  onProgress?: (progress: JobProgress) => void;  // JS only: progress callback
}

// Options for createIndex
interface CreateIndexOptions {
  modelId?: string;               // Embedding model to use (model_id in Python)
  onProgress?: (progress: JobProgress) => void;  // JS only: progress callback
}

// Progress update during async jobs (passed to onProgress callback)
interface JobProgress {
  jobId: string;                  // Job identifier (job_id in Python)
  status: JobStatus;              // Current job status
  progress: number;               // 0-100 completion percentage
  currentPhase: JobPhase | null;  // Current processing phase (current_phase in Python)
}

// Full job status response from getJobStatus
interface JobStatusResponse {
  jobId: string;                  // Job identifier (job_id in Python)
  status: JobStatus;              // Current status
  progress: number;               // 0-100 completion percentage
  currentPhase: JobPhase | null;  // Current processing phase (current_phase in Python)
  createdAt: string;              // ISO 8601 timestamp (created_at in Python)
  updatedAt: string;              // ISO 8601 timestamp (updated_at in Python)
  completedAt?: string | null;    // ISO 8601 timestamp (completed_at in Python)
  error?: string | null;          // Error message if failed
}

// Job status values
type JobStatus = "pending_upload" | "uploading" | "building" | "completed" | "failed";

// Job processing phases
type JobPhase = "downloading" | "deserializing" | "generating_embeddings" | "building_index" | "uploading" | "cleanup";
```

### Options Interfaces

```typescript
// Filter which documents to retrieve with getDocs
interface GetDocumentsOptions {
  docIds?: string[];  // Optional IDs to retrieve (doc_ids in Python). Omit to get all
}

// Controls loadIndex behavior (JavaScript only)
interface LoadIndexOptions {
  autoRefresh?: boolean;           // Default: false. Enable polling for index updates
  pollingIntervalInSeconds?: number; // Default: 600. Polling interval when autoRefresh is true
}
```

### Model Selection

| Model | Use Case | Tradeoff |
|-------|----------|----------|
| `moss-minilm` | Edge, offline, browser, speed-first | Fast, lightweight |
| `moss-mediumlm` | Precision-critical, higher accuracy | Slightly slower |
| `custom` | Pre-computed embeddings from external sources | No model loaded; must supply embeddings |

### Performance Expectations
- Sub-10ms local queries (hardware-dependent)
- Instant index updates without reindexing entire corpus
- Sync is optional; compute stays on-device
- No infrastructure to manage

### Chunking Best Practices
- Aim for ~200–500 tokens per chunk
- Overlap 10–20% to preserve context
- Normalize whitespace and strip boilerplate

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Unauthorized | Missing credentials | Set `MOSS_PROJECT_ID` and `MOSS_PROJECT_KEY` |
| Index not found | Query before create | Call `createIndex()` first |
| Index not loaded | Query before load | Call `loadIndex()` before `query()` (note: `query()` falls back to cloud if not loaded locally in JS) |
| Missing embeddings runtime | Invalid model | Use `moss-minilm` or `moss-mediumlm` |
| Job failed | Async mutation error | Check `JobStatusResponse.error` via `getJobStatus(jobId)` |

Most SDK methods throw if the target index does not exist. `createIndex()` throws if the index already exists. `loadIndex()` throws if the index does not exist in cloud or loading fails. Mutation methods (`createIndex`, `addDocs`, `deleteDocs`) run as async jobs and return `MutationResult`; use `getJobStatus()` for manual polling if needed.

### Async Pattern
All SDK methods are async - always use `await`. Mutation methods (`createIndex`, `addDocs`, `deleteDocs`) return a `MutationResult` with a `jobId` and handle the async job lifecycle automatically (including polling until completion):

```typescript
// JavaScript - mutations now return MutationResult and support onProgress
const result = await client.createIndex('faqs', docs, {
  modelId: 'moss-minilm',
  onProgress: (p) => console.log(`${p.currentPhase}: ${p.progress}%`)
})
console.log(result.jobId) // job ID for manual status checks
await client.loadIndex('faqs')
const results = await client.query('faqs', 'search text', 5)
```

```python
# Python
result = await client.create_index("faqs", docs, "moss-minilm")
print(result.job_id)  # job ID for manual status checks
await client.load_index("faqs")
results = await client.query("faqs", "search text", top_k=5)
```

---

> For additional documentation and navigation, see: https://docs.moss.dev/llms.txt
