# Quicklinks

Quicklinks are URLs to commonly used websites to be opened inside Ziik.

## Create Quicklink

```bash
curl -i -X POST "https://example.ziik.io/api/quicklinks"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created quicklink

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/quicklinks/1234
{
    "message": "Quicklink created"
}
```

This endpoint creates a quicklink.

### HTTP Request

`POST https://example.ziik.io/api/quicklinks`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Name of quicklink.
link | String | Yes | Full URL to the destination including protocol
visibility | Array | No | Array of visibility options:
- userTypes | Array | No | User type IDs of the user types, who can read this quicklink
- units | Array | No | Units this quicklink should be published in
- units_falldown | Array | No | Units this quicklink should be published in along with its sub-units
owner_unit | Integer | No | ID of the unit, the user is writing from - applicable when the user is in multiple units with create permission

### Permissions Required

* Administer permission to quicklinks

## Get Quicklinks
```bash
curl "https://example.ziik.io/api/quicklinks"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "content_type": "quick_links",
      "name": "deleniti",
      "link": "https://www.ziemann.net/ducimus-consequatur-non-rerum-consequatur-non-hic-ut-dolores",
      "visibility": {
        "owner": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
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
        "delete": true
      },
      "url": "api/quicklinks/2"
    },
    {
      "id": 1,
      "content_type": "quick_links",
      "name": "modi",
      "link": "https://www.strosin.com/distinctio-omnis-tempore-velit-dolor-non",
      "visibility": {
        "owner": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
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
        "delete": true
      },
      "url": "api/quicklinks/1"
    }
  ]
}

```

This endpoint retrieves all quicklinks

### HTTP Request

`GET https://example.ziik.io/api/quicklinks`

### Query Parameters

None - all quicklinks are returned

## Get Single Quicklink

```bash
curl "https://example.ziik.io/api/quicklinks/4"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "quick_links",
    "name": "eum",
    "link": "http://bogisich.com/iste-modi-accusantium-ut-suscipit.html",
    "visibility": {
      "owner": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
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
      "delete": true
    },
    "url": "api/quicklinks/1"
  }
}
```

This endpoint returns a single quicklink

### HTTP Request

`GET https://example.ziik.io/api/quicklinks/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the quicklink

## Edit Quicklink

```bash
curl -i -X PATCH "https://example.ziik.io/api/quicklinks/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing quicklink.

### HTTP Request

`PATCH https://example.ziik.io/api/quicklinks/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | Name of quicklink.
link | String | No | Full URL to the destination including protocol
visibility | Array | No | Array of visibility options:
- userTypes | Array | No | User type IDs of the user types, who can read this quicklink
- units | Array | No | Units this quicklink should be published in
- units_falldown | Array | No | Units this quicklink should be published in along with its sub-units

### Permissions Required

* Administer permission to quicklinks
* Quicklink created by a user in the current user's unit

## Delete Quicklink

```bash
curl -i -X DELETE "https://example.ziik.io/api/quicklinks/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a quicklink.

### HTTP Request

`DELETE https://example.ziik.io/api/quicklinks/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the quicklink to delete

### Permissions Required

* Administer permission to quicklinks 