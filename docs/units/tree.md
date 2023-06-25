# Hierarchy

## Get Unit Tree
```bash
curl "https://example.ziik.io/api/units/tree"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "content_type": "unit",
      "id": 2,
      "name": "Kemmer LLC",
      "level": 1,
      "unit_type": "unit",
      "departments": [],
      "parent": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "image": null,
      "stats": {
        "children": 2,
        "users": 5
      },
      "children": [
        {
          "content_type": "unit",
          "id": 5,
          "name": "Gleason PLC",
          "level": 2,
          "unit_type": "unit",
          "departments": [],
          "parent": {
            "content_type": "unit",
            "id": 2,
            "name": "Kemmer LLC",
            "level": 1,
            "unit_type": "unit",
            "url": "api/units/2"
          },
          "image": null,
          "children": [],
          "url": "api/units/5"
        },
        {
          "content_type": "unit",
          "id": 3,
          "name": "Upton and Sons",
          "level": 2,
          "unit_type": "unit",
          "departments": [],
          "parent": {
            "content_type": "unit",
            "id": 2,
            "name": "Kemmer LLC",
            "level": 1,
            "unit_type": "unit",
            "url": "api/units/2"
          },
          "image": null,
          "children": [],
          "url": "api/units/3"
        },
        {
          "content_type": "unit",
          "id": 4,
          "name": "Ward Inc",
          "level": 2,
          "unit_type": "unit",
          "departments": [],
          "parent": {
            "content_type": "unit",
            "id": 2,
            "name": "Kemmer LLC",
            "level": 1,
            "unit_type": "unit",
            "url": "api/units/2"
          },
          "image": null,
          "children": [],
          "url": "api/units/4"
        }
      ],
      "url": "api/units/2"
    }
  ]
}
```

Get user's own units and their direct children

### HTTP Request

`GET https://example.ziik.io/api/units/tree`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
exclude | Integer | null | Leave out the unit with the id of 'exclude' parameter along with its children
flatten | Boolean | false | If true, return a list rather than a nested hierarchy
all | Boolean | false | If true, start from the top unit
unit | Integer | null | If set to the ID of one of the user's units, set that unit as top unit of the returned hierarchy
permission | String | null | If set to a permission name, returns a tree of units with the roots being the user's units that the user has the given permission in

## Get Units Directly Below In Hierarchy
```bash
curl "https://example.ziik.io/api/units/123/children"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "content_type": "unit",
      "id": 5,
      "name": "Bode-Pollich",
      "level": 2,
      "unit_type": "unit",
      "departments": [],
      "parent": {
        "content_type": "unit",
        "id": 2,
        "name": "Cummerata, Kiehn and Runolfsson",
        "level": 1,
        "unit_type": "unit",
        "url": "api/units/2"
      },
      "image": null,
      "url": "api/units/5"
    },
    {
      "content_type": "unit",
      "id": 3,
      "name": "Gusikowski, Wilkinson and Skiles",
      "level": 2,
      "unit_type": "unit",
      "departments": [],
      "parent": {
        "content_type": "unit",
        "id": 2,
        "name": "Cummerata, Kiehn and Runolfsson",
        "level": 1,
        "unit_type": "unit",
        "url": "api/units/2"
      },
      "image": null,
      "url": "api/units/3"
    },
    {
      "content_type": "unit",
      "id": 4,
      "name": "Stehr-Champlin",
      "level": 2,
      "unit_type": "unit",
      "departments": [],
      "parent": {
        "content_type": "unit",
        "id": 2,
        "name": "Cummerata, Kiehn and Runolfsson",
        "level": 1,
        "unit_type": "unit",
        "url": "api/units/2"
      },
      "image": null,
      "url": "api/units/4"
    }
  ]
}

```

This endpoint retrieves all units directly below a given unit.

### HTTP Request

`GET https://example.ziik.io/api/units/ID/children`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | Unit ID to fetch children for

## Move Unit
```bash
curl -i -X POST "https://example.ziik.io/api/units/123/move"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint moves a unit relative to another unit

### HTTP Request

`POST https://example.ziik.io/api/units/ID/move`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the unit to move

### Request Parameters
Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
relation | Integer | null | ID of the unit to
position | String | inside | Where to place the unit in relation to 'relation': 'inside' (child of), 'before' or 'after' (same level as)

### Permissions Required

* Unit edit access
* Edit access to relation

## Get Unit Count
```bash
curl "https://example.ziik.io/api/units/count"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "count": 34
}
```

This endpoint returns the total count of units in a tree based on the query parameters.

### HTTP Request

`GET http://example.ziik.io/api/units/count`

### Query Parameters

Parameter | Required | Default | Description
--------- | -------- | ------- | -----------
units | No | null | ID or array of IDs of units to filter on
units_falldown | No | null | ID or array of IDs of units to filter on with their subunits
