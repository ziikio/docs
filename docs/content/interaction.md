# Interaction

## Mark Content Seen

```bash
curl -i -X POST "https://example.ziik.io/api/content/123/seen"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks a content post as seen for the current user.

### HTTP Request

`POST https://example.ziik.io/api/content/123/seen`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Get Users Who Have Seen Content

```bash
curl "https://example.ziik.io/api/content/124/seen"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "timestamp": 1540467737,
      "user": {
        "content_type": "user",
        "id": 2,
        "name": "Ellsworth Walsh",
        "first_name": "Ellsworth",
        "last_name": "Walsh",
        "title": "Chemical Engineer",
        "avatar": null,
        "active": true,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/2"
      }
    }
  ]
}
```

This endpoint returns users, who have seen a content post

### HTTP Request

`GET https://example.ziik.io/api/content/ID/seen`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content

### Permissions Required

* Edit access to the content (See "Edit Content")

## Confirm Read Content

```bash
curl -i -X POST "https://example.ziik.io/api/content/123/read"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint confirms a content post read for the current user.

### HTTP Request

`POST https://example.ziik.io/api/content/123/read`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Get Confirmed Readers of a Content

```bash
curl "https://example.ziik.io/api/content/124/read"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "timestamp": 1540467737,
      "user": {
        "content_type": "user",
        "id": 2,
        "name": "Ellsworth Walsh",
        "first_name": "Ellsworth",
        "last_name": "Walsh",
        "title": "Chemical Engineer",
        "avatar": null,
        "active": true,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/2"
      }
    }
  ]
}
```

This endpoint returns users, who have confirmed read a content post

### HTTP Request

`GET https://example.ziik.io/api/content/ID/read`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content

### Permissions Required

* Edit access to the content (See "Edit Content")

## Get Non-confirmed Readers of Content

```bash
curl "https://example.ziik.io/api/content/124/unread"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "timestamp": null,
      "user": {
        "content_type": "user",
        "id": 2,
        "name": "Ellsworth Walsh",
        "first_name": "Ellsworth",
        "last_name": "Walsh",
        "title": "Chemical Engineer",
        "avatar": null,
        "active": true,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/2"
      }
    }
  ]
}
```

This endpoint returns users, who have NOT confirmed read a content post, but should

### HTTP Request

`GET https://example.ziik.io/api/content/ID/unread`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content

### Permissions Required

* Edit access to the content (See "Edit Content")

## Bookmark Content

```bash
curl -i -X POST "https://example.ziik.io/api/content/123/bookmark"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint bookmarks a content post for the current user.

### HTTP Request

`POST https://example.ziik.io/api/content/123/bookmark`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Un-bookmark Content

```bash
curl -i -X DELETE "https://example.ziik.io/api/content/123/bookmark"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint removes a bookmark for a content post for the current user.

### HTTP Request

`DELETE https://example.ziik.io/api/content/123/bookmark`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Like Content

```bash
curl -i -X POST "https://example.ziik.io/api/content/123/like"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks a content as liked for the current user.

### HTTP Request

`POST https://example.ziik.io/api/content/123/like`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Un-like Content

```bash
curl -i -X DELETE "https://example.ziik.io/api/content/123/like"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint removes a like on a content post for the current user.

### HTTP Request

`DELETE https://example.ziik.io/api/content/123/like`

### Request Parameters

None

### Permissions Required

* Read access to the content (See "Get Single Content")

## Get Likers of Content

```bash
curl "https://example.ziik.io/api/content/124/like"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "timestamp": 1540467737,
      "user": {
        "content_type": "user",
        "id": 2,
        "name": "Ellsworth Walsh",
        "first_name": "Ellsworth",
        "last_name": "Walsh",
        "title": "Chemical Engineer",
        "avatar": null,
        "active": true,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/2"
      }
    }
  ]
}
```

This endpoint returns users, who have liked a content post

### HTTP Request

`GET https://example.ziik.io/api/content/ID/like`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content

### Permissions Required

* Read access to the content (See "Get Single Content")