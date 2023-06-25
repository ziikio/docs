# FAQ

Frequently Asked Questions is a question and an answer - potentially illustrated by media (video or image)

FAQs are restricted by units and user types.

## Create FAQ

```bash
curl -i -X POST "https://example.ziik.io/api/faq"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created faq

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/faq/1234
{
  "data": {
    "id": 1,
    "content_type": "faq",
    "question": "New FAQ",
    "answer": "",
    "author": {
      "content_type": "user",
      "id": 3,
      "name": "Cornelius Keebler",
      "first_name": "Cornelius",
      "last_name": "Keebler",
      "title": "Clerk",
      "avatar": null,
      "active": true,
      "unit": {
        "content_type": "unit",
        "id": 2,
        "name": "Parisian, Thiel and Berge",
        "level": 1,
        "unit_type": "department",
        "parent": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/units/2"
      },
      "physicalUnit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "url": "api/users/3"
    },
    "publish": {
      "published_at": 1540545116,
      "created_at": 1540545116,
      "updated_at": 1540545116
    },
    "categories": [],
    "uploading_files": 0,
    "files": [],
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
        },
        {
          "content_type": "unit",
          "id": 2,
          "name": "Parisian, Thiel and Berge",
          "level": 1,
          "unit_type": "department",
          "falldown": false,
          "url": "api/units/2"
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
      "edit": false,
      "delete": false
    },
    "url": "api/faq/1"
  }
}
```

This endpoint creates a new faq.

### HTTP Request

`POST https://example.ziik.io/api/faq`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
question | String | Yes | FAQ question.
answer | String | No | Answer to the FAQ.
categories | Array | No | IDs of the faq categories
visibility | Array | No | When publishing to units and user types, they should come in this array
- units | Array | No | Units this FAQ should be published to
- units_falldown | Array | No | Units this FAQ should be published to along with their sub-units
- userTypes | Array | No | IDs of the user types to publish to
owner_unit | Integer | No | ID of the unit, the user is writing from - applicable when the user is in multiple units with create permission

### Permissions Required

* FAQ permission

## Get FAQs
```bash
curl "https://example.ziik.io/api/faq"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 3,
      "content_type": "faq",
      "question": "Architecto eligendi quia quidem esse ipsum suscipit.",
      "answer": "<p>Perferendis quo delectus esse praesentium consequatur fuga harum. Illo est nulla mollitia nihil.</p>",
      "publish": {
        "published_at": 1540545220,
        "created_at": 1540545220,
        "updated_at": 1540545220
      },
      "categories": [],
      "uploading_files": 0,
      "files": [],
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
        "edit": false,
        "delete": false
      },
      "url": "api/faq/3"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/faq?page=1",
    "last": "https://example.ziik.io/api/faq?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/faq",
    "per_page": 50,
    "to": 6,
    "total": 6
  }
}
```

This endpoint retrieves a list of FAQ.

### HTTP Request

`GET https://example.ziik.io/api/faq`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
category | Integer | NULL | If set, only show faq from this category
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Single FAQ

```bash
curl "https://example.ziik.io/api/faq/1225"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "faq",
    "question": "Id sed quas delectus a.",
    "answer": "<p>Voluptas quia illo eligendi quisquam. Ipsa architecto est voluptate ducimus unde eum. Voluptates voluptate deleniti ipsum vel sed. Et ratione numquam neque ut eum rerum modi.</p>",
    "author": {
      "content_type": "user",
      "id": 3,
      "name": "Santa Kling",
      "first_name": "Santa",
      "last_name": "Kling",
      "title": "Radiologic Technologist and Technician",
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
      "url": "api/users/3"
    },
    "publish": {
      "published_at": 1540545319,
      "created_at": 1540545319,
      "updated_at": 1540545319
    },
    "categories": [],
    "uploading_files": 0,
    "files": [],
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
      "edit": false,
      "delete": false
    },
    "url": "api/faq/1"
  }
}
```

This endpoint returns a single faq

### HTTP Request

`GET https://example.ziik.io/api/faq/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the faq

### Permissions Required

* Match between FAQ and User units and user types

## Edit FAQ

```bash
curl -i -X PATCH "https://example.ziik.io/api/faq/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing faq.

### HTTP Request

`PATCH https://example.ziik.io/api/faq/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
question | String | no | FAQ question.
answer | String | No | Answer to the FAQ.
categories | Array | No | IDs of the faq categories
visibility | Array | No | When publishing to units and user types, they should come in this array
- units | Array | No | Units this FAQ should be published to
- units_falldown | Array | No | Units this FAQ should be published to along with their sub-units
- userTypes | Array | No | IDs of the user types to publish to

### Permissions Required

* Administer FAQ permission

## Delete FAQ

```bash
curl -i -X DELETE "https://example.ziik.io/api/faq/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a FAQ.

### HTTP Request

`DELETE https://example.ziik.io/api/faq/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the FAQ to delete

### Permissions Required

* Administer faq permission