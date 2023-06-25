# Shift Templates

## Create Template

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/templates"
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
    "name": "New Shift Template",
    "unit": {
      "content_type": "unit",
      "id": 1,
      "name": "HQ",
      "level": 0,
      "unit_type": "unit",
      "url": "api/units/1"
    },
    "template": [
      {
        "start_date": 86400,
        "end_date": 93600,
        "comment": "",
        "shift_type": 1,
        "worker": 3,
        "break": 60
      },
      {
        "start_date": 86400,
        "end_date": 93600,
        "comment": "",
        "shift_type": 1,
        "worker": 4,
        "break": 60
      }
    ],
    "permissions": {
      "edit": false,
      "delete": false
    },
    "url": "api/shifts/templates/1"
  }
}
```

This endpoint creates a template from a given week, that can later be applied to weeks in the same unit as the template is created.

### HTTP Request

`POST https://example.ziik.io/api/shifts/templates`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Name to identify the template
unit | Integer | Yes | Unit to connect the template to
week | Integer | Yes | ISO week number to fetch shifts from to save as template
year | Integer | No | Defaults to current year

### Permissions Required

* Schedule permissions for the template's unit

## Get Templates

```bash
curl "https://example.ziik.io/api/shifts/templates"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 5,
      "name": "commodi",
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "permissions": {
        "edit": false,
        "delete": false
      },
      "url": "api/shifts/templates/5"
    }
  ]
}

```

This endpoint retrieves a list of templates.

### HTTP Request

`GET https://example.ziik.io/api/shifts/templates`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
unit | Integer | NULL | Unit to fetch templates for. Defaults to requesting user's unit.
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Single Template


```bash
curl "https://example.ziik.io/api/shifts/templates/1"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": {
    "id": 1,
    "name": "ipsa",
    "unit": {
      "content_type": "unit",
      "id": 1,
      "name": "HQ",
      "level": 0,
      "unit_type": "unit",
      "url": "api/units/1"
    },
    "template": [
      {
        "start_date": 28800,
        "end_date": 57600,
        "shift_type": 1,
        "worker": 0,
        "break": 30
      },
      {
        "start_date": 28800,
        "end_date": 57600,
        "shift_type": 3,
        "worker": 0,
        "break": 0
      },
      {
        "start_date": 28800,
        "end_date": 57600,
        "shift_type": 3,
        "worker": 0,
        "break": 60
      },
      {
        "start_date": 115200,
        "end_date": 144000,
        "shift_type": 1,
        "worker": 0
      }
    ],
    "permissions": {
      "edit": false,
      "delete": false
    },
    "url": "api/shifts/templates/1"
  }
}

```

This endpoint retrieves details about a single template.

### HTTP Request

`GET https://example.ziik.io/api/shifts/templates/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
id | Integer | Template ID.

## Apply Template to Week

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/templates/1/apply"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created on success. No Location header is given in this case.

```http
HTTP/1.0 201 Created
```

This endpoint replaces all shifts in a given week with the shifts defined in the chosen template.

Templates operate on individual units and cannot be used across other units. Therefore, only the template's unit is affected by this operation.

### HTTP Request

`POST https://example.ziik.io/api/shifts/templates/ID/apply`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
week | Integer | Yes | ISO week number to apply the template to
year | Integer | No | Defaults to current year

### Permissions Required

* Schedule permissions for the template's unit

## Edit Template

```bash
curl -i -X PATCH "https://example.ziik.io/api/shifts/templates/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing template, fetching shifts from a new week and overwrites the existing template with these shifts.

### HTTP Request

`PATCH https://example.ziik.io/api/shifts/templates/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
week | Integer | Yes | ISO week number to fetch shifts from to save as template
year | Integer | No | If not given, defaults to current year

### Permissions Required

* Schedule permissions for the template's unit

## Delete Template

```bash
curl -i -X DELETE "https://example.ziik.io/api/shifts/templates/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a template.

### HTTP Request

`DELETE https://example.ziik.io/api/shifts/templates/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the template to delete

### Permissions Required

* Schedule permissions for the template's unit