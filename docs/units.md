# Units

## Create Unit

```bash
curl -i -X POST "https://example.ziik.io/api/units"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created unit

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/units/1234
{
   "data": {
     "content_type": "unit",
     "id": 2,
     "name": "New Unit",
     "description": null,
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
     "addresses": {
       "company": {
         "id": 1,
         "company": "New Unit",
         "registration_number": null,
         "vat_number": null,
         "street": null,
         "street_additional": null,
         "postal_code": null,
         "city": null,
         "country": null,
         "phone": null,
         "email": null,
         "comments": null,
         "use_company_address": false
       },
       "delivery": {
         "id": 2,
         "company": null,
         "registration_number": null,
         "vat_number": null,
         "street": null,
         "street_additional": null,
         "postal_code": null,
         "city": null,
         "country": null,
         "phone": null,
         "email": null,
         "comments": null,
         "use_company_address": false
       },
       "invoicing": {
         "id": 3,
         "company": null,
         "registration_number": null,
         "vat_number": null,
         "street": null,
         "street_additional": null,
         "postal_code": null,
         "city": null,
         "country": null,
         "phone": null,
         "email": null,
         "comments": null,
         "use_company_address": false
       }
     },
     "contact": {
       "name": "",
       "phone": ""
     },
     "opening_hours": {
       "office_hours": null,
       "closed": null
     },
     "geo": {
       "lat": null,
       "lng": null
     },
     "stats": [],
     "permissions": {
       "edit": false,
       "delete": false
     },
     "url": "api/units/2"
   }
 }
```

This endpoint creates a new unit.

### HTTP Request

`POST https://example.ziik.io/api/units`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Unit name.
parent | Integer | Yes | ID of unit that should be the parent in the unit hierarchy.
reference | String | No | External reference - free text field useful to keep a reference to another system.
description | String | No | Unit description.
unit_type | String | No | 'unit' or 'department'.
features | Array | No | Array of unit feature IDs to describe the unit
opening_hours | Array | No | Information regarding when the unit is open/closed. Array with the following values.
- office_hours | Array | No | Arrays for each weekday with the normal business hours, each having the following values.
- - day | Integer | No | Weekday (1 = monday, 5 = friday, 7 = sunday).
- - starthours | Integer | No | Time of day of opening in military time (9 AM = 900, 6 PM = 1800).
- - endhours | Integer | No | Time of day of closing, also in military time.
- closed | Array | No | Arrays of periods, where the unit is closed, each with the following values.
- - start | Integer | No | Unix timestamp of when closing period starts.
- - end | Integer | No | Unix timestamp of when closing period ends.

### Permissions Required

* Administer permission to units
* Parent is user's own unit or below

## Get Units

```bash
curl "https://example.ziik.io/api/units"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "content_type": "unit",
      "id": 3,
      "name": "Dach-Windler",
      "level": 0,
      "unit_type": "unit",
      "departments": [],
      "features": [],
      "stats": {
        "children": 2,
        "users": 5,
        "children_total": 3
      },
      "parent": null,
      "image": null,
      "url": "api/units/3"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/units?page=1",
    "last": "https://example.ziik.io/api/units?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/units",
    "per_page": 50,
    "to": 7,
    "total": 7
  }
}
```

This endpoint retrieves units.

### HTTP Request

`GET https://example.ziik.io/api/units`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
user | Boolean | false | Filter units to contain only user's unit or below
page | Integer | 1 | Page number for pagination.
limit | Integer | 15 | Number of records to return per page.
feature | Integer | null | Feature ID. If set, fetch only units with that feature
type | String | 'unit' | Types to filter units on. Values can be 'unit' or 'department' and can be comma-separated
full_stats | Boolean | false | Get the full stats array, if not set to "true", then the stats collection will have reduced information.

## Get Single Unit

```bash
curl "https://example.ziik.io/api/units/12"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "content_type": "unit",
    "id": 2,
    "reference": "ext-dbafds234bafdsf234-12",
    "name": "Altenwerth-Aufderhar",
    "description": null,
    "level": 0,
    "unit_type": "unit",
    "departments": [],
    "parent": null,
    "image": null,
    "addresses": {
      "company": {
        "id": 1,
        "company": "et",
        "registration_number": null,
        "vat_number": null,
        "street": null,
        "street_additional": null,
        "postal_code": null,
        "city": null,
        "country": null,
        "phone": null,
        "email": null,
        "comments": null,
        "use_company_address": false
      },
      "delivery": null,
      "invoicing": null
    },
    "contact": {
      "name": "",
      "phone": ""
    },
    "opening_hours": {
      "office_hours": null,
      "closed": null
    },
    "geo": {
      "lat": null,
      "lng": null
    },
    "stats": {
      "children": 2,
      "users": 5,
      "children_total": 3
    },
    "permissions": {
      "edit": false,
      "delete": false
    },
    "url": "api/units/2"
  }
}
```

This endpoint returns a single unit

### HTTP Request

`GET https://example.ziik.io/api/units/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the unit

## Get Unit By Reference

```bash
curl "https://example.ziik.io/api/units/reference/abcd-dfaf"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "content_type": "unit",
    "id": 2,
    "reference": "ext-dbafds234bafdsf234-12",
    "name": "Altenwerth-Aufderhar",
    "description": null,
    "level": 0,
    "unit_type": "unit",
    "departments": [],
    "parent": null,
    "image": null,
    "addresses": {
      "company": {
        "id": 1,
        "company": "et",
        "registration_number": null,
        "vat_number": null,
        "street": null,
        "street_additional": null,
        "postal_code": null,
        "city": null,
        "country": null,
        "phone": null,
        "email": null,
        "comments": null,
        "use_company_address": false
      },
      "delivery": null,
      "invoicing": null
    },
    "contact": {
      "name": "",
      "phone": ""
    },
    "opening_hours": {
      "office_hours": null,
      "closed": null
    },
    "geo": {
      "lat": null,
      "lng": null
    },
    "stats": {
      "children": 2,
      "users": 5,
      "children_total": 3
    },
    "permissions": {
      "edit": false,
      "delete": false
    },
    "url": "api/units/2"
  }
}
```

This endpoint returns a unit with the external reference given in URL

### HTTP Request

`GET https://example.ziik.io/api/units/reference/REF`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
REF | String | The external reference of the unit

## Edit Unit

```bash
curl -i -X PATCH "https://example.ziik.io/api/units/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing unit.

### HTTP Request

`PATCH https://example.ziik.io/api/units/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | Unit name.
parent | Integer | No | ID of new parent unit
reference | String | No | External reference - free text field useful to keep a reference to another system
description | String | No | Unit description.
unit_type | String | No | 'unit' or 'department'.
features | Array | No | Array of unit feature IDs to describe the unit
opening_hours | Array | No | Information regarding when the unit is open/closed. Array with the following values
- office_hours | Array | No | Arrays for each weekday with the normal business hours, each having the following values
- - day | Integer | No | Weekday (1 = monday, 5 = friday, 7 = sunday)
- - starthours | Integer | No | Time of day of opening in military time (9 AM = 900, 6 PM = 1800)
- - endhours | Integer | No | Time of day of closing, also in military time
- closed | Array | No | Arrays of periods, where the unit is closed, each with the following values
- - start | Integer | No | Unix timestamp of when closing period starts
- - end | Integer | No | Unix timestamp of when closing period ends

### Permissions Required

* Edit permission to units

## Delete Unit

```bash
curl -i -X DELETE "https://example.ziik.io/api/units/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a unit.

### HTTP Request

`DELETE https://example.ziik.io/api/units/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the unit to delete

### Permissions Required

* Administer permission to units