# Operations

## Trigger Welcome Mail
```bash
curl -i -X POST "https://example.ziik.io/api/users/welcome"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint sends a welcome email to one or more users.

### HTTP Request

`POST https://example.ziik.io/api/users/welcome`

### Request Parameters

Parameter | Type | Description
--------- | ---- | -----------
users | Array | IDs of the users to send welcome mail

### Permissions Required

* User edit access for the selected users

## Change User Password

```bash
curl -i -X PATCH "https://example.ziik.io/api/users/123/password"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates the password for an existing user.

### HTTP Request

`PATCH https://example.ziik.io/api/users/ID/password`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
password | String | Yes | New user password.
current | String | If changing own password | Current user password

### Permissions Required

* Administer permission to users
* Edited user's unit must be same as editing user's unit or below

## Get Birthday List
```bash
curl "http://example.ziik.io/api/users/birthdays"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "content_type": "user",
      "id": 4,
      "name": "Wendy Kshlerin",
      "first_name": "Wendy",
      "last_name": "Kshlerin",
      "title": "Offset Lithographic Press Operator",
      "avatar": null,
      "active": true,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent": null,
        "url": "api/units/1"
      },
      "physicalUnit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent": null,
        "url": "api/units/1"
      },
      "url": "api/users/4"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/users/birthdays?page=1",
    "last": "https://example.ziik.io/api/users/birthdays?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/users/birthdays",
    "per_page": 500,
    "to": 3,
    "total": 3
  }
}
```

This endpoint retrieves users with birthdays within a period.
If the current user has set to only see birthdays within own unit, the list will only contain users from the same unit

### HTTP Request

`GET http://example.ziik.io/api/users/birthdays`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
start | null | First date to fetch birthdays for in the format of MM-DD - e.g. 10-24 for October 24th 
end | null | Last date to fetch birthdays for in the format of MM-DD
page |  1 | Page number for pagination.
limit | 50 | Number of records to return per page.

## Accept Policy
```bash
curl -i -X POST "https://example.ziik.io/api/users/policy"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint registers acceptance of site policy for the current user

### HTTP Request

`POST https://example.ziik.io/api/users/policy`
