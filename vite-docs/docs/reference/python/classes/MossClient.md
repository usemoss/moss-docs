[inferedge-moss v1.0.0b7](../README.md)

[inferedge-moss](../globals.md) / MossClient

# Class: MossClient

<a id="class-mossclient"></a>

Semantic search client for vector similarity operations.

## Methods

### `create_index(index_name, docs, model_id)`

Create a new index populated with documents.

#### Parameters

- **index_name** (`str`): Name of the index to create.
- **docs** (List[[`DocumentInfo`](../interfaces/DocumentInfo.md)]): Documents to ingest into the index.
- **model_id** (`str`): Identifier for the embedding model.

#### Returns

`bool`

True if the creation request succeeded.


---

### `get_index(index_name)`

Retrieve metadata for a single index.

#### Parameters

- **index_name** (`str`): Name of the index to inspect.

#### Returns

[`IndexInfo`](../interfaces/IndexInfo.md)

Metadata describing the requested index.


---

### `list_indexes()`

List all indexes in the current project.

#### Returns

List[[`IndexInfo`](../interfaces/IndexInfo.md)]

List[IndexInfo]: Collection of index metadata objects.


---

### `delete_index(index_name)`

Delete an index and all associated documents.

#### Parameters

- **index_name** (`str`): Name of the index to delete.

#### Returns

`bool`

True if the deletion request succeeded.


---

### `add_docs(index_name, docs, options)`

Insert or update documents in an index.

#### Parameters

- **index_name** (`str`): Target index name.
- **docs** (List[[`DocumentInfo`](../interfaces/DocumentInfo.md)]): Documents to add or upsert.
- **options** (Optional[[`AddDocumentsOptions`](../interfaces/AddDocumentsOptions.md)]): Upsert behavior overrides.

#### Returns

`Dict[str, int]`

Dict[str, int]: Mutation counts such as inserted or updated totals.


---

### `delete_docs(index_name, doc_ids)`

Remove documents by identifier.

#### Parameters

- **index_name** (`str`): Target index name.
- **doc_ids** (`List[str]`): Identifiers of documents to delete.

#### Returns

`Dict[str, int]`

Dict[str, int]: Summary counts for deleted documents.


---

### `get_docs(index_name, options)`

Fetch documents stored in an index.

#### Parameters

- **index_name** (`str`): Target index name.
- **options** (Optional[[`GetDocumentsOptions`](../interfaces/GetDocumentsOptions.md)]): Retrieval filters.

#### Returns

List[[`DocumentInfo`](../interfaces/DocumentInfo.md)]

List[DocumentInfo]: Documents that satisfy the filters.


---

### `load_index(index_name)`

Load an index from persistent storage.

#### Parameters

- **index_name** (`str`): Name of the index to load.

#### Returns

`str`

Identifier or status describing the loaded index.


---

### `query(index_name, query, top_k, alpha)`

Execute a semantic similarity search.

#### Parameters

- **index_name** (`str`): Target index name.
- **query** (`str`): Natural language query string.
- **top_k** (`int`): Maximum number of documents to return.
- **alpha** (`Optional[float]`): Hybrid weighting value.

#### Returns

[`SearchResult`](../interfaces/SearchResult.md)

Ranked documents and metadata for the query.

