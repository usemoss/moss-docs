[**@inferedge/moss v1.0.0-beta.2**](../README.md)

***

[@inferedge/moss](../globals.md) / SerializedIndex

# Interface: SerializedIndex

Complete serialized representation of an index for local .moss file storage.

Contains all data necessary to recreate an index, including configuration,
documents, and pre-computed embeddings.

## Properties

### name

> **name**: `string`

Name of the index.

***

### version

> **version**: `string`

Index build/format version (semver).

***

### model

> **model**: [`ModelRef`](ModelRef.md)

Model bound to this index.

***

### dimension

> **dimension**: `number`

Embedding dimensionality.

***

### embeddings

> **embeddings**: `number`[][]

Embedding vectors (rows = embedding vectors).

***

### docIds

> **docIds**: `string`[]

Document IDs parallel to embeddings.
