# Chapters

## Create Chapter

```bash
curl -i -X POST "https://example.ziik.io/api/manuals/123/chapters"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created chapter

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/manuals/123/chapters/1234
{
  "data": {
    "id": 6,
    "content_type": "chapter",
    "title": "New Chapter",
    "description": null,
    "manual_id": 1,
    "visibility": {
      "inherit": false,
      "userTypes": [
        {
          "id": 1,
          "name": "Manager"
        },
        {
          "id": 2,
          "name": "Employee"
        }
      ]
    },
    "chapters": [],
    "permissions": {
      "view": true
    },
    "url": "api/chapter/6"
  }
}
```

This endpoint creates a chapter for a manual.

### HTTP Request

`POST https://example.ziik.io/api/manuals/ID/chapters`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | Yes | Chapter title
parent | Integer | No | Parent chapter for the created chapter
visibility | Array | No | Visibility options as an array with the following
- inherit | Boolean | No | Whether the chapter should inherit access from its parent chapter/manual
- userTypes | Array | No | User type IDs of the user types, who can access the chapter

### Permissions Required

* Update permission to the manual

## Get Manual Chapters

```bash
curl "https://example.ziik.io/api/manuals/123/chapters"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 4,
      "content_type": "chapter",
      "title": "Chapter 2.1",
      "description": null,
      "manual_id": 1,
      "visibility": {
        "inherit": false,
        "userTypes": []
      },
      "permissions": {
        "view": true
      },
      "url": "api/chapter/4"
    }
  ]
}
```

This endpoint returns all chapters for a manual in a tree structure

### HTTP Request

`GET https://example.ziik.io/api/manuals/ID/chapters`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the manual

### Permissions Required

* Read access to the manual

## Get Chapter With Subchapters And Paragraphs

```bash
curl "https://example.ziik.io/api/chapters/123/tree"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
      "id": 4,
      "content_type": "chapter",
      "title": "Chapter 2.1",
      "description": null,
      "manual_id": 1,
      "level": 1,
      "index": "1"
      "visibility": {
        "inherit": false,
        "userTypes": []
      },
      "chapters": [
        {
          "id": 5,
          "content_type": "chapter",
          "title": "Chapter 2.1.1",
          "description": null,
          "manual_id": 1,
          "level": 2,
          "index": "1.1",
          "visibility": {
            "inherit": false,
            "userTypes": []
          },
          "chapters": [],
          "paragraphs": [],
          "permissions": {
            "view": true
          },
          "url": "api/chapter/5"
        }
      ],
      "paragraphs": [],
      "permissions": {
        "view": true
      },
      "url": "api/chapter/4"
  }
}
```

This endpoint returns a chapter and all its subchapters along with the paragraphs, if the query parameter is included

### HTTP Request

`GET https://example.ziik.io/api/chapters/ID/tree`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the chapter

### Query Parameters

Parameter | Type | Description
--------- | ---- | -----------
full | Any | If set - even without a value - chapters returned will include paragraphs

### Permissions Required

* Read access to the manual
* User's user type within the chapter's user types

## Get Single Chapter

```bash
curl "https://example.ziik.io/api/chapters/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 3,
    "content_type": "chapter",
    "title": "Chapter 1.1",
    "description": null,
    "manual_id": 1,
    "level": 1,
    "index": "1",
    "visibility": {
      "inherit": false,
      "userTypes": []
    },
    "permissions": {
      "view": true
    },
    "url": "api/chapter/3"
  }
}
```

This endpoint returns a single chapter

### HTTP Request

`GET https://example.ziik.io/api/chapters/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the chapter

### Permissions Required

* Read access to the manual
* User's user type within the chapter's user types

## Update Chapter

```bash
curl -i -X PATCH "https://example.ziik.io/api/chapters/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing chapter.

### HTTP Request

`PATCH https://example.ziik.io/api/chapters/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | Yes | Chapter title
parent | Integer | No | Parent chapter for the created chapter
visibility | Array | No | Visibility options as an array with the following
- inherit | Boolean | No | Whether the chapter should inherit access from its parent chapter/manual
- userTypes | Array | No | User type IDs of the user types, who can access the chapter

### Permissions Required

* Update permission to the manual

## Move Chapter In Manual Hierarchy

```bash
curl -i -X POST "https://example.ziik.io/api/chapters/123/move"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint moves a chapter to a new location in the manual hierarchy.

### HTTP Request

`POST https://example.ziik.io/api/chapters/ID/move`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
chapter | Integer | Yes | ID of the chapter to relate to
position | String | Yes | Where to place the chapter relative to the relation chapter. Possible values are "before" (previous sibling), "after" (next sibling), "inside" (child of relation)


## Delete Chapter

```bash
curl -i -X DELETE "https://example.ziik.io/api/chapters/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a chapter and all its subchapters.

### HTTP Request

`DELETE https://example.ziik.io/api/chapters/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the chapter to delete

### Permissions Required

* Update permission to the manual