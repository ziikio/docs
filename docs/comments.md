# Comments

## Reply To A Comment

```bash
curl -i -X POST "https://example.ziik.io/api/comments/124/reply"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the new comment

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/comments/1234
{
    "message": "Comment created"
}
```

This endpoint creates a new reply to a comment. A reply is simply another comment with the first comment as its parent

### HTTP Request

`POST https://example.ziik.io/api/comments/ID/reply`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
comment | String | Yes | Comment body.
fileCount | Integer | No | Number of files that will be uploaded with subsequent POSTs to /api/comments/ID/files

### Permissions Required

* Access permission to comment's content
* Comments enabled for content

## Get Replies to a Comment

```bash
curl "https://example.ziik.io/api/comments/124/replies"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 2,
      "body": "Qui nihil et ad aut nam sunt. Rerum ut omnis magni aut. Quidem et et qui consectetur debitis sapiente soluta.",
      "author": {
        "content_type": "user",
        "id": 5,
        "name": "Amely Ryan",
        "first_name": "Amely",
        "last_name": "Ryan",
        "title": "Construction Manager",
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
        "physicalUnit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/5"
      },
      "publish": {
        "created_at": 1540450282,
        "updated_at": 1540453882
      },
      "replies": {
        "count": 0,
        "latest": null
      },
      "interaction": {
        "liked": false
      },
      "stats": {
        "likes": 0,
        "replies": 0
      },
      "is_new": false,
      "is_reply": true,
      "uploading_files": 0,
      "files": [],
      "mentions": [],
      "url": "api/comments/2",
      "permissions": {
        "edit": true,
        "edit_until": 0,
        "delete": true
      }
    },
    {
      "id": 3,
      "body": "Esse eius consequatur ducimus reiciendis blanditiis eos. Debitis animi a cupiditate et quis sunt error quibusdam.",
      "author": {
        "content_type": "user",
        "id": 6,
        "name": "Keely Kautzer",
        "first_name": "Keely",
        "last_name": "Kautzer",
        "title": "Order Filler OR Stock Clerk",
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
        "physicalUnit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/6"
      },
      "publish": {
        "created_at": 1540450282,
        "updated_at": 1540453882
      },
      "replies": {
        "count": 0,
        "latest": null
      },
      "interaction": {
        "liked": false
      },
      "stats": {
        "likes": 0,
        "replies": 0
      },
      "is_new": false,
      "is_reply": true,
      "uploading_files": 0,
      "files": [],
      "mentions": [],
      "url": "api/comments/3",
      "permissions": {
        "edit": true,
        "edit_until": 0,
        "delete": true
      }
    }
  ]
}
```

This endpoint returns all replies for a comment

### HTTP Request

`GET https://example.ziik.io/api/comments/ID/replies`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the debate

### Permissions Required

* Access permission to comment content

## Get Single Comment

```bash
curl "https://example.ziik.io/api/comments/1241"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "body": "Dolorem impedit ea quia eaque quia dolores. Esse est eveniet aliquam. Maiores possimus neque consequuntur quia quod distinctio. Incidunt saepe qui aut dolores.",
    "author": {
      "content_type": "user",
      "id": 4,
      "name": "Phoebe Harber",
      "first_name": "Phoebe",
      "last_name": "Harber",
      "title": "Licensed Practical Nurse",
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
      "physicalUnit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "url": "api/users/4"
    },
    "publish": {
      "created_at": 1540454308,
      "updated_at": 1540454308
    },
    "replies": {
      "count": 1,
      "latest": {
        "id": 2,
        "body": "Saepe voluptatem fuga blanditiis consequatur sint aut et. Laborum praesentium et error est velit. Et maiores recusandae et quo.",
        "author": {
          "content_type": "user",
          "id": 5,
          "name": "Abigale Kassulke",
          "first_name": "Abigale",
          "last_name": "Kassulke",
          "title": "Stone Sawyer",
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
          "physicalUnit": {
            "content_type": "unit",
            "id": 1,
            "name": "HQ",
            "level": 0,
            "unit_type": "unit",
            "url": "api/units/1"
          },
          "url": "api/users/5"
        },
        "publish": {
          "created_at": 1540454308,
          "updated_at": 1540454308
        },
        "replies": [],
        "interaction": [],
        "stats": [],
        "is_new": false,
        "is_reply": true,
        "uploading_files": 0,
        "url": "api/comments/2",
        "permissions": {
          "edit": true,
          "edit_until": 0,
          "delete": true
        }
      }
    },
    "interaction": {
      "liked": false
    },
    "stats": {
      "likes": 0,
      "replies": 1
    },
    "is_new": false,
    "is_reply": false,
    "uploading_files": 0,
    "files": [],
    "mentions": [],
    "url": "api/comments/1",
    "permissions": {
      "edit": true,
      "edit_until": 0,
      "delete": true
    }
  }
}
```

This endpoint returns a single comment with its latest reply, if applicable

### HTTP Request

`GET https://example.ziik.io/api/comments/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the comment

### Permissions Required

* Access to commented content

## Edit a Comment

```bash
curl -i -X PATCH "https://example.ziik.io/api/comments/1241"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful comment update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing comment.

### HTTP Request

`PATCH https://example.ziik.io/api/comments/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
comment | String | Yes | Comment body.

### Permissions Required

* Group administrator of commented debate
* OR Comment author

::: tip
Authors can only edit or delete comments within 15 minutes of creation.
:::

## Delete a Comment

```bash
curl -i -X DELETE "https://example.ziik.io/api/comments/124"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a comment.

### HTTP Request

`DELETE https://example.ziik.io/api/comments/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | Integer | The ID of the comment to delete

### Permissions Required

* Edit permissions to commented content
* OR Comment author

::: tip
Authors can only edit or delete comments within 15 minutes of creation.
:::