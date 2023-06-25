# Manuals
Manuals are guides and policies orchestrated by the chain management.

Manuals can be restricted by user types and contains chapters (and sub-chapters) that can be restricted further by user types.

## Create New Manual

```bash
curl -i -X POST "https://example.ziik.io/api/manuals"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created manual

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/manuals/1234
{
  "data": {
    "id": 3,
    "content_type": "manuals",
    "title": "New Manual",
    "description": "This is a description",
    "image": null,
    "publish": {
      "status": true,
      "published_at": 1540552225,
      "created_at": 1540552225,
      "updated_at": 1540552225
    },
    "visibility": {
      "units": [
        {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/1"
        }
      ],
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
    "permissions": {
      "edit": true,
      "delete": true,
      "publish": true
    },
    "url": "api/manuals/3"
  }
}
```

This endpoint creates a manual.

### HTTP Request

`POST https://example.ziik.io/api/manuals`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | Yes | Manual title
description | String | No | Short description of the manual
publish | Array | No | Publish options as an array with the following
- status | Boolean | No | If true, manual is published, otherwise it is a draft, only available to users with write permission
visibility | Array | No | Visibility options as an array with the following
- userTypes | Array | No | User type IDs of the user types, who can access the manual
- units | Array | No | Units this manual should be available in
- units_falldown | Array | No | Units this manual should be available in with their sub-units
owner_unit | Integer | No | ID of the unit, the user is writing from - applicable when the user is in multiple units with create permission

### Permissions Required

* Write permission to manuals

## Get Manuals

```bash
curl "https://example.ziik.io/api/manuals"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "content_type": "manuals",
      "title": "Distinctio suscipit ut sint rerum laborum assumenda.",
      "description": "Omnis dicta facilis sunt aliquid. Doloremque iusto nostrum consequatur esse. Atque et voluptatem praesentium eius quia sit.",
      "image": null,
      "publish": {
        "status": true,
        "published_at": 1540547540,
        "created_at": 1540552287,
        "updated_at": 1540552287
      },
      "visibility": {
        "units": [
          {
            "content_type": "unit",
            "id": 1,
            "name": "HQ",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/1"
          }
        ],
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
      "permissions": {
        "edit": true,
        "delete": true,
        "publish": true
      },
      "url": "api/manuals/2"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/manuals?page=1",
    "last": "https://example.ziik.io/api/manuals?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/manuals",
    "per_page": 50,
    "to": 2,
    "total": 2
  }
}
```

This endpoint retrieves a list of manuals.

### HTTP Request

`GET https://example.ziik.io/api/manuals`

### Query Parameters

None

## Get Single Manual

```bash
curl "https://example.ziik.io/api/manuals/927"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
 {
   "data": {
     "id": 3,
     "content_type": "manuals",
     "title": "New Manual",
     "description": "This is a description",
     "image": null,
     "publish": {
       "status": true,
       "published_at": 1540552225,
       "created_at": 1540552225,
       "updated_at": 1540552225
     },
     "visibility": {
       "units": [
         {
           "content_type": "unit",
           "id": 1,
           "name": "HQ",
           "level": 0,
           "unit_type": "unit",
           "falldown": false,
           "url": "api/units/1"
         }
       ],
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
     "permissions": {
       "edit": true,
       "delete": true,
       "publish": true
     },
     "url": "api/manuals/3"
   }
 }
```

This endpoint returns an entire manual with chapters and subchapters, but without paragraph content

### HTTP Request

`GET https://example.ziik.io/api/manuals/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the manual

### Permissions Required

* User's user type in manual's user types
* User's unit in manual's units

## Update Manual

```bash
curl -i -X PATCH "https://example.ziik.io/api/manuals/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing manual.

### HTTP Request

`PATCH https://example.ziik.io/api/manuals/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | Yes | Manual title
description | String | No | Short description of the manual
publish | Array | No | Publish options as an array with the following
- status | Boolean | No | If true, manual is published, otherwise it is a draft, only available to users with write permission
visibility | Array | No | Visibility options as an array with the following
- userTypes | Array | No | User type IDs of the user types, who can access the manual
- units | Array | No | Units this manual should be available in
- units_falldown | Array | No | Units this manual should be available in with their sub-units

### Permissions Required

* Write permission to manuals
* Requesting user in the same unit as the manual's creator

## Delete Manual

```bash
curl -i -X DELETE "https://example.ziik.io/api/manuals/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a manual and all its chapters.

### HTTP Request

`DELETE https://example.ziik.io/api/manuals/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the manual to delete

### Permissions Required

* Write permission to manuals
* Requesting user in the same unit as the manual's creator