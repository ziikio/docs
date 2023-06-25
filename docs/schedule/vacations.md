# Vacations

## Create Vacation

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/vacations"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created shift

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/shifts/vacations/1234
{
  "data": {
    "id": 1,
    "content_type": "schedule",
    "date": {
      "start": 1541376000,
      "end": 1541980800
    },
    "type": "vacation",
    "trade": false,
    "comment": null,
    "break": 0,
    "unit": {
      "content_type": "unit",
      "id": 1,
      "name": "HQ",
      "level": 0,
      "unit_type": "unit",
      "url": "api/units/1"
    },
    "assigned": {
      "content_type": "user",
      "id": 3,
      "name": "Kurtis Prohaska",
      "first_name": "Kurtis",
      "last_name": "Prohaska",
      "title": "Decorator",
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
      "url": "api/users/3"
    },
    "creator": {
      "content_type": "user",
      "id": 2,
      "name": "Marcel Larson",
      "first_name": "Marcel",
      "last_name": "Larson",
      "title": "Roofer",
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
    },
    "applicants": [],
    "permissions": {
      "edit": false,
      "delete": false,
      "take": false,
      "request": false,
      "close": false,
      "apply": false,
      "approve": false
    },
    "url": "api/vacations/1"
  }
}
```

This endpoint creates a vacation.

### HTTP Request

`POST https://example.ziik.io/api/shifts/vacations`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
start | Integer | Yes | Unix timestamp of when the vacation begins
end | Integer | Yes | Unix timestamp of when the vacation ends
assigned | Integer | No | User ID of vacating user. Defaults to requesting user

### Permissions Required

* Either Set own vacation permission and assigned equal to the requesting user
* OR Set vacation for unit members and assigned user's unit equal to requesting user's unit

## Get Vacations

```bash
curl "https://example.ziik.io/api/shifts"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 1,
      "content_type": "schedule",
      "date": {
        "start": "1541462400",
        "end": "1541469600"
      },
      "type": "vacation",
      "trade": false,
      "comment": "",
      "break": 60,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "assigned": {
        "content_type": "user",
        "id": 3,
        "name": "Marcia Schuppe",
        "first_name": "Marcia",
        "last_name": "Schuppe",
        "title": "Preschool Education Administrators",
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
        "url": "api/users/3"
      },
      "creator": null,
      "applicants": [],
      "permissions": {
        "edit": false,
        "delete": false,
        "take": false,
        "request": false,
        "close": false,
        "apply": false,
        "approve": false
      },
      "url": "api/vacations/1"
    }
  ]
}

```

This endpoint retrieves a list of vacations.

A vacation is just like a shift with the type "vacation" instead of "taken", "trade" or "empty"

### HTTP Request

`GET https://example.ziik.io/api/shifts/vacations`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
unit | Integer | User's unit | Unit to fetch vacations for
start | Integer | NULL | Unix timestamp of earliest start time of a vacation
end | Integer | NULL | Unix timestamp of latest start time of a vacation

## Get Single Vacation

```bash
curl "https://example.ziik.io/api/shifts/vacations/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "schedule",
    "date": {
      "start": "1541462400",
      "end": "1541469600"
    },
    "type": "vacation",
    "trade": false,
    "comment": "",
    "break": 60,
    "unit": {
      "content_type": "unit",
      "id": 1,
      "name": "HQ",
      "level": 0,
      "unit_type": "unit",
      "url": "api/units/1"
    },
    "assigned": {
      "content_type": "user",
      "id": 3,
      "name": "Reanna Brakus",
      "first_name": "Reanna",
      "last_name": "Brakus",
      "title": "Animal Control Worker",
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
      "url": "api/users/3"
    },
    "creator": null,
    "applicants": [],
    "permissions": {
      "edit": false,
      "delete": false,
      "take": false,
      "request": false,
      "close": false,
      "apply": false,
      "approve": false
    },
    "url": "api/vacations/1"
  }
}
```

This endpoint returns a single vacation

### HTTP Request

`GET https://example.ziik.io/api/shifts/vacations/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the vacation

### Permissions Required

* Authenticated user

## Edit Vacation

```bash
curl -i -X PATCH "https://example.ziik.io/api/shifts/vacations/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing vacation.

### HTTP Request

`PATCH https://example.ziik.io/api/shifts/vacations/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
start | Integer | No | Unix timestamp of when the vacation begins
end | Integer | No | Unix timestamp of when the vacation ends
assigned | Integer | No | User ID of vacating user. Defaults to requesting user

### Permissions Required

* Either Set own vacation permission and assigned equal to the requesting user
* OR Set vacation for unit members and assigned user's unit equal to requesting user's unit

## Delete Vacation

```bash
curl -i -X DELETE "https://example.ziik.io/api/shifts/vacations/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a vacation.

### HTTP Request

`DELETE https://example.ziik.io/api/shifts/vacations/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the vacation to delete

### Permissions Required

* Either Set own vacation permission and assigned equal to the requesting user
* OR Set vacation for unit members and assigned user's unit equal to requesting user's unit