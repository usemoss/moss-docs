[**@inferedge/moss v1.0.0-beta.2**](../README.md)

***

[@inferedge/moss](../globals.md) / QueryResultDocumentInfo

# Interface: QueryResultDocumentInfo

Document result from a query with similarity score.

## Extends

- [`DocumentInfo`](DocumentInfo.md)

## Properties

### id

> **id**: `string`

Unique identifier within an index.

#### Inherited from

[`DocumentInfo`](DocumentInfo.md).[`id`](DocumentInfo.md#id)

***

### text

> **text**: `string`

REQUIRED canonical text to embed/search.

#### Inherited from

[`DocumentInfo`](DocumentInfo.md).[`text`](DocumentInfo.md#text)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Optional metadata associated with the document.

#### Inherited from

[`DocumentInfo`](DocumentInfo.md).[`metadata`](DocumentInfo.md#metadata)

***

### score

> **score**: `number`

Similarity score (0-1, higher = more similar).
