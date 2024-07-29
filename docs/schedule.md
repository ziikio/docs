# Shift Scheduling

The shift schedule has simple operations for scheduling who is working when and in which unit

## Create Shift

```bash
curl -i -X POST "https://example.ziik.io/api/shifts"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created

```http
HTTP/1.0 201 Created
{
  "data": {
    "id": 1,
    "content_type": "shift",
    "start": 1540857600,
    "end": 1540861200,
    "note": null,
    "comment": null,
    "break": null,
    "unit_id": 2,
    "assignee_id": 3,
    "unit": {
      "content_type": "unit",
      "id": 2,
      "name": "Wyman, Beer and Hane",
      "level": 1,
      "unit_type": "unit",
      "url": "api/units/2"
    },
    "assigned": {
      "content_type": "user",
      "id": 3,
      "name": "Caleigh Breitenberg",
      "first_name": "Caleigh",
      "last_name": "Breitenberg",
      "title": "Postal Service Clerk",
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
    "applicants": [],
    "permissions": {
      "edit": false,
      "delete": false,
      "take": false,
      "request": false,
      "close": false,
      "apply": false,
      "approve": false
    }
  }
}
```

This endpoint creates a shift.

### HTTP Request

`POST https://example.ziik.io/api/shifts`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
unit_id | Integer | Yes | Id of unit to create shift in.
start | Integer | Yes | Unix timestamp of when the shift begins
end | Integer | Yes | Unix timestamp of when the shift ends
assignee_id | Integer | No | User ID of shift assignee

### Permissions Required

* Schedule permission to units and shift's unit equal to user's unit or below

## Get Shifts

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
      "type": "taken",
      "trade": false,
      "note": null,
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
        "name": "Kadin Hill",
        "first_name": "Kadin",
        "last_name": "Hill",
        "title": "Financial Analyst",
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
      "url": "api/shifts/1"
    }
  ]
}

```

This endpoint retrieves a list of shifts.

### HTTP Request

`GET https://example.ziik.io/api/shifts`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
unit | Integer | User's unit | Unit to fetch shifts for
user | Integer | NULL | User to fetch shifts for. Overrides any unit parameter set
start | Integer | NULL | Unix timestamp of earliest start time of a shift
end | Integer | NULL | Unix timestamp of latest start time of a shift
includeVacations | Boolean | false | Whether to include vacations in the returned list
types | Array | Any | One or more shift types to fetch - 1: taken, 2: trade, 3: open

## Get Single Shift

```bash
curl "https://example.ziik.io/api/shift/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "schedule",
    "date": {
      "start": "1540771200",
      "end": "1541469600"
    },
    "type": "taken",
    "trade": false,
    "note": null,
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
      "name": "Winona Schuster",
      "first_name": "Winona",
      "last_name": "Schuster",
      "title": "Political Scientist",
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
    "url": "api/shifts/1"
  }
}
```

This endpoint returns a single shift

### HTTP Request

`GET https://example.ziik.io/api/shifts/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the shift

### Permissions Required

* Authenticated user

## Edit Shift

```bash
curl -i -X PATCH "https://example.ziik.io/api/shifts/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing shift.

### HTTP Request

`PATCH https://example.ziik.io/api/shifts/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
unit | Integer | No | Unit to create shift in. Defaults to user's own unit
start | Integer | No | Unix timestamp of when the shift begins
end | Integer | No | Unix timestamp of when the shift ends
assigned | Integer | No | User ID of shift assignee
trade | Boolean | No | Whether the shift should be available for trade

### Permissions Required

* Schedule permission to units and shift's unit equal to user's unit or below

## Delete Shift

```bash
curl -i -X DELETE "https://example.ziik.io/api/shifts/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a shift.

### HTTP Request

`DELETE https://example.ziik.io/api/shifts/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the shift to delete

### Permissions Required

* Schedule permission to units and shift's unit equal to user's unit or below