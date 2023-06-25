# Interaction

## Get Comment Likers

```bash
curl "https://example.ziik.io/api/comments/123/likes"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "timestamp": 1540453676,
      "user": {
        "content_type": "user",
        "id": 2,
        "name": "Randi Gerhold",
        "first_name": "Randi",
        "last_name": "Gerhold",
        "title": "Drafter",
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

This endpoint returns a list of users, who have liked a comment along with the timestamp of the like.

### HTTP Request

`GET https://example.ziik.io/api/comments/ID/like`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the comment

### Permissions Required

* Access to the comment's content

## Like comment

```bash
curl -i -X POST "https://example.ziik.io/api/comments/123/like"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks a comment as liked by the user.

### HTTP Request

`POST https://example.ziik.io/api/comments/123/like`

### Request Parameters

None

### Permissions Required

* Read access to the comment's content

## Unlike a Comment

```bash
curl -i -X DELETE "https://example.ziik.io/api/comments/123/like"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint removes a like for a comment for the current user.

### HTTP Request

`DELETE https://example.ziik.io/api/comments/ID/like`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the comment to unlike