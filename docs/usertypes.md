# Usertypes

## Create User Type

```bash
curl -i -X POST "https://example.ziik.io/api/usertypes"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created user type

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/usertypes/1234
{
  "data": {
    "id": 3,
    "name": "New User Type",
    "abilities": {
      "news": true,
      "calendar": false,
      "manuals": false,
      "faq": false,
      "groups": true,
      "quick_links": false,
      "user": false,
      "look_and_feel": false,
      "usertypes": false,
      "units": false,
      "supplier": false,
      "schedule": false,
      "shift_trading_request": false,
      "shift_trading_take": false,
      "shift_trading_approve": false,
      "vacation_own": false,
      "vacation_unit": false,
      "integrations": false
    }
  }
}
```

This endpoint creates a new user type.

### HTTP Request

`POST https://example.ziik.io/api/usertypes`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Usertype name
reference | String | No | External reference - free text field useful to keep a reference to another system
abilities | Array | No | An array of permissions with the following optional values
- news | Boolean | No | If a "truthy" value, permission to publish news is set
- calendar | Boolean | No | If a "truthy" value, permission to publish events to units and user types is set
- manuals | Boolean | No | If a "truthy" value, permission to publish manuals is set
- faq | Boolean | No | If a "truthy" value, permission to publish FAQs is set
- quick_links | Boolean | No | If a "truthy" value, permission to publish quick links is set
- user | Boolean | No | If a "truthy" value, permission to manage users in own unit and below is set
- units | Boolean | No | If a "truthy" value, permission to edit own unit and below is set
- supplier | Boolean | No | If a "truthy" value, permission to publish suppliers is set
- schedule | Boolean | No | If a "truthy" value, permission to manage shifts in own unit and below is set
- shift_trading_approve | Boolean | No | If a "truthy" value, permission to approve shift trades in own unit and below is set
- shift_trading_request | Boolean | No | If a "truthy" value, permission to request shift trades of own shifts is set
- shift_trading_take | Boolean | No | If a "truthy" value, permission to take shifts up for trades in own unit and below, without approval from a manager is set
- vacation_own | Boolean | No | If a "truthy" value, permission to manage own vacations is set
- vacation_unit | Boolean | No | If a "truthy" value, permission to manage vacations for other users in own unit and below is set

### Permissions Required

* User is administrator

## Get User Types

```bash
curl "https://example.ziik.io/api/usertypes"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "reference": "ext-23414-b234",
      "name": "Employee"
    },
    {
      "id": 1,
      "reference": "ext-23414-b236",
      "name": "Manager"
    }
  ]
}

```

This endpoint retrieves a list of user types.

### HTTP Request

`GET https://example.ziik.io/api/usertypes`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
all | Any | null | If set, all user types are returned, otherwise only user types that are connected to one or more users in own unit or below
unit | Integer or Array of integers | null | If set, restrict results to user types assigned at least one user in the supplied units and their descendants

## Get Single User Type

```bash
curl -i -X POST "https://example.ziik.io/api/usertypes/168"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns the following JSON


```json
{
  "data": {
    "id": 3,
    "name": "Employee",
    "reference": "ext-23414-b234",
    "abilities": {
      "news": false,
      "calendar": false,
      "manuals": false,
      "faq": false,
      "groups": true,
      "quick_links": false,
      "user": false,
      "look_and_feel": false,
      "usertypes": false,
      "units": false,
      "supplier": false,
      "schedule": false,
      "shift_trading_request": false,
      "shift_trading_take": false,
      "shift_trading_approve": false,
      "vacation_own": false,
      "vacation_unit": false
    }
  }
}
```

This endpoint retrieves a single user type along with its permissions.

### HTTP Request

`GET https://example.ziik.io/api/usertypes/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user type

## Get User Type By Reference

```bash
curl -i -X POST "https://example.ziik.io/api/usertypes/reference/abcd-asdfads"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns the following JSON


```json
{
  "data": {
    "id": 3,
    "name": "Employee",
    "reference": "ext-23414-b234",
    "abilities": {
      "news": false,
      "calendar": false,
      "manuals": false,
      "faq": false,
      "groups": true,
      "quick_links": false,
      "user": false,
      "look_and_feel": false,
      "usertypes": false,
      "units": false,
      "supplier": false,
      "schedule": false,
      "shift_trading_request": false,
      "shift_trading_take": false,
      "shift_trading_approve": false,
      "vacation_own": false,
      "vacation_unit": false
    }
  }
}
```

This endpoint retrieves a single user type by its external reference given in the URL.

### HTTP Request

`GET https://example.ziik.io/api/usertypes/reference/REF`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
REF | String | The external reference of the user type

### Permissions Required

None

## Edit User Type

```bash
curl -i -X PATCH "https://example.ziik.io/api/usertypes/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing user type.

### HTTP Request

`PATCH https://example.ziik.io/api/usertypes/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | New usertype name
reference | String | No | External reference - free text field useful to keep a reference to another system
abilities | Array | No | An array of permissions with the following optional values
- news | Boolean | No | If a "truthy" value, permission to publish news is set
- calendar | Boolean | No | If a "truthy" value, permission to publish events to units and user types is set
- manuals | Boolean | No | If a "truthy" value, permission to publish manuals is set
- faq | Boolean | No | If a "truthy" value, permission to publish FAQs is set
- quick_links | Boolean | No | If a "truthy" value, permission to publish quick links is set
- user | Boolean | No | If a "truthy" value, permission to manage users in own unit and below is set
- units | Boolean | No | If a "truthy" value, permission to edit own unit and below is set
- supplier | Boolean | No | If a "truthy" value, permission to publish suppliers is set
- schedule | Boolean | No | If a "truthy" value, permission to manage shifts in own unit and below is set
- shift_trading_approve | Boolean | No | If a "truthy" value, permission to approve shift trades in own unit and below is set
- shift_trading_request | Boolean | No | If a "truthy" value, permission to request shift trades of own shifts is set
- shift_trading_take | Boolean | No | If a "truthy" value, permission to take shifts up for trades in own unit and below, without approval from a manager is set
- vacation_own | Boolean | No | If a "truthy" value, permission to manage own vacations is set
- vacation_unit | Boolean | No | If a "truthy" value, permission to manage vacations for other users in own unit and below is set

### Permissions Required

* User is administrator

## Delete Usertype

```bash
curl -i -X DELETE "https://example.ziik.io/api/usertypes/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a user type.

### HTTP Request

`DELETE https://example.ziik.io/api/usertypes/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user type to delete

### Permissions Required

* User is administrator

::: warning
Deleting a user type will remove it from all users that may have it - this may result in users that have no user types and therefore no permissions to access content
:::