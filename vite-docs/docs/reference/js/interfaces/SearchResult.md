[**@inferedge/moss v1.0.0-beta.2**](../README.md)

***

[@inferedge/moss](../globals.md) / SearchResult

# Interface: SearchResult

Search operation result.

## Properties

### docs

> **docs**: [`QueryResultDocumentInfo`](QueryResultDocumentInfo.md)[]

Matching documents ordered by similarity score.

***

### query

> **query**: `string`

The original search query.

***

### indexName?

> `optional` **indexName**: `string`

Name of the index that was searched.

***

### timeTakenInMs?

> `optional` **timeTakenInMs**: `number`

Time taken to execute the search in milliseconds.
