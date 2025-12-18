[**@inferedge/moss v1.0.0-beta.2**](../README.md)

***

[@inferedge/moss](../globals.md) / DocumentInfo

# Interface: DocumentInfo

Document that can be indexed and retrieved.

## Extended by

- [`QueryResultDocumentInfo`](QueryResultDocumentInfo.md)

## Properties

### id

> **id**: `string`

Unique identifier within an index.

***

### text

> **text**: `string`

REQUIRED canonical text to embed/search.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Optional metadata associated with the document.
