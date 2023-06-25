# Features

## Create Unit Feature

```bash
curl -i -X POST "https://example.ziik.io/api/units/features"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created feature

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/units/features/1234
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/units/features/1"
  }
}
```

This endpoint creates a new unit feature.

### HTTP Request

`POST https://example.ziik.io/api/units/features`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Feature name

### Permissions Required

* Administer permission to categories

## Get Unit Features

```bash
curl "https://example.ziik.io/api/units/features"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 9,
      "name": "delectus",
      "url": "api/units/features/9"
    },
    {
      "id": 8,
      "name": "eius",
      "url": "api/units/features/8"
    },
    {
      "id": 10,
      "name": "et",
      "url": "api/units/features/10"
    }
  ]
}
```

This endpoint retrieves a list of unit features.

### HTTP Request

`GET https://example.ziik.io/api/units/features`

### Query Parameters

None

## Get Single Unit Feature
```bash
curl "https://example.ziik.io/api/units/features/1"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/units/features/1"
  }
}
```

### HTTP Request

`GET https://example.ziik.io/api/units/features/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the feature

### Permissions Required

* Authenticated user

## Edit Unit Feature

```bash
curl -i -X PATCH "https://example.ziik.io/api/units/features/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing unit feature.

### HTTP Request

`PATCH https://example.ziik.io/api/units/features/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | New feature name

### Permissions Required

* Administer permission to categories

## Delete Unit Feature

```bash
curl -i -X DELETE "https://example.ziik.io/api/units/features/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a unit feature.

### HTTP Request

`DELETE https://example.ziik.io/api/units/features/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the feature to delete

### Permissions Required

* Administer permission to categories