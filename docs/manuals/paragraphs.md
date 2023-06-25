# Paragraphs

## Create Paragraph

```bash
curl -i -X POST "https://example.ziik.io/api/chapters/123/paragraphs"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created paragraph

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/chapters/123/paragraphs/1234
{
  "data": {
    "id": 13,
    "chapter_id": 1,
    "content_type": "paragraph",
    "uploading_files": 0,
    "order": 2,
    "text": "<p>New paragraph</p>",
    "files": []
  }
}
```

This endpoint creates a paragraph for a chapter.

### HTTP Request

`POST https://example.ziik.io/api/chapters/ID/paragraphs`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
text | String | Yes | Paragraph contents

## Get Single Paragraph

```bash
curl "https://example.ziik.io/api/paragraphs/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
    {
      "text": "<HTML TEXT>",
      "files": [{
          "id": 643,
          "name": "filename.jpg",
          "mime": "image/jpeg",
          "size": 102380,
          "type": "image",
          "source": "https://example.ziik.io/api/file/manuals/filename.jpg",
          "versions": {
              "listing": "https://example.ziik.io/api/file/styles/article_listing/private/manuals/filename.jpg",
              "detail": "https://example.ziik.io/api/file/styles/article_desktop/private/manuals/filename.jpg",
              "thumbnail":"https://example.ziik.io/api/file/styles/media_thumbnail/private/manuals/filename.png"
          }
      }]
    }
```

This endpoint returns a paragraph

### HTTP Request

`GET https://example.ziik.io/api/paragraphs/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the paragraph

### Permissions Required

* Read access to the paragraph's chapter

## Update Paragraph

```bash
curl -i -X PATCH "https://example.ziik.io/api/paragraphs/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing paragraph.

### HTTP Request

`PATCH https://example.ziik.io/api/paragraphs/ID`

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
text | String | Yes | Paragraph contents

### Permissions Required

* Update permission to the manual

## Delete Paragraph

```bash
curl -i -X DELETE "https://example.ziik.io/api/paragraphs/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a paragraph.

### HTTP Request

`DELETE https://example.ziik.io/api/paragraphs/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the paragraph to delete

### Permissions Required

* Update permission to the manual

## Move Paragraph In Chapter

```bash
curl -i -X POST "https://example.ziik.io/api/paragraphs/123/move"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint moves a paragraph to a new order in the chapter.

### HTTP Request

`POST https://example.ziik.io/api/paragraphs/ID/move`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
new | Integer | Yes | Position in the paragraph ordering (1 = first, 2 = second etc.)