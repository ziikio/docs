# Users

## Create User

```bash
curl -i -X POST "https://example.ziik.io/api/users"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created user

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/users/1234
{
  "data": {
    "content_type": "user",
    "id": 3,
    "reference": "ext-243-b4",
    "name": "New User",
    "first_name": "New",
    "last_name": "User",
    "title": null,
    "active": true,
    "ask_about": null,
    "country": null,
    "quote": "",
    "description": "",
    "phone": null,
    "email": "test@example.com",
    "birthday": null,
    "policy_accept": false,
    "latest_release": 5,
    "settings": {
      "timezone": null,
      "show_birthdays": "none",
      "birthdays_optout": true,
      "expire": null,
      "language": "en"
    },
    "admin": false,
    "system_admin": false,
    "permissions": {
      "edit": true,
      "delete": true
    },
    "url": "api/users/3"
  }
}
```

This endpoint creates a new user.

### HTTP Request

`POST https://example.ziik.io/api/users`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
first_name | String | Yes | User first name.
last_name | String | Yes | User last name.
email | String | Yes | User email address.
unit | Integer | Yes | Unit, the user belongs to
reference | String | No | External reference - free text field useful to keep a reference to another system
userTypes | Array | No | Usertype IDs for the user
title | String | No | User's job title
birthday | String | No | User's birthday in YYYY-MM-DD HH:II:SS format
phone | String | No | Phone number
country | String | No | User's home country in ISO Alpha-2 Code format (See http://www.nationsonline.org/oneworld/country_code_list.htm)
quote | String | No | A personal quote for the user
description | String | No | User description.
specialties | Array | No | IDs of specialties for the user
ask_about | String | No | Short sentence about the user's expertise
settings | Array | No | Array of user settings with the following elements
- show_birthdays | Boolean | No | Whether to show other user's birthdays in this user's calendar
- birthdays_optout | Boolean | No | If opted out, this user's birthday will not show up in other users' calendar
- language | String | No | User's language in ISO 639-1 Code - provided the language is available in Ziik
- expire | Integer | No | Unix timestamp of when this user should expire and automatically be deactivated
welcome | Boolean | No | Whether to send a welcome mail to the created user. Defaults to true

### Permissions Required

* Administer permission to users
* Unit must be a unit, the editing user has access to

## Get Users

```bash
curl "http://example.ziik.io/api/users"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "content_type": "user",
      "id": 3,
      "reference": "",
      "name": "Tyson Cronin",
      "first_name": "Tyson",
      "last_name": "Cronin",
      "title": "Nursing Aide",
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
      "url": "api/users/3"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/users?page=1",
    "last": "https://example.ziik.io/api/users?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/users",
    "per_page": 50,
    "to": 7,
    "total": 7
  }
}
```

This endpoint retrieves users.

### HTTP Request

`GET http://example.ziik.io/api/users`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
page |  1 | Page number for pagination.
limit | 15 | Number of records to return per page.
unit | NULL | ID of a unit. If set, only fetch users from this unit
specialties | NULL | ID or array of IDs of specialties. If set, only fetch users with any of these specialties
userTypes | NULL | ID or array of IDs of user types. If set, only fetch users with any of these user types
inactive | NULL | (Requires site administrator privileges) If present in the query, no matter the value, only inactive, non-anonymised accounts will be returned 

## Get Single User

```bash
curl "http://example.ziik.io/api/users/123"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "content_type": "user",
    "id": 3,
    "reference": "d234a24fa545",
    "name": "Cali Medhurst",
    "first_name": "Cali",
    "last_name": "Medhurst",
    "title": "Respiratory Therapy Technician",
    "active": true,
    "ask_about": "Ut inventore sint quia deleniti. Deleniti dolores saepe aspernatur soluta est quis autem.",
    "country": "Seychelles",
    "quote": "Temporibus quis hic omnis iure cupiditate.",
    "description": "Facere ut sequi recusandae et qui aliquam. Et aspernatur voluptas dicta ut amet repudiandae ut ratione. Quas qui amet expedita maiores. Quisquam asperiores expedita enim neque.",
    "phone": "1-840-949-8033 x9847",
    "email": "tremaine80@example.net",
    "birthday": "1990-09-11",
    "policy_accept": false,
    "latest_release": 5,
    "settings": {
      "timezone": "America/Costa_Rica",
      "show_birthdays": "none",
      "birthdays_optout": true,
      "expire": null,
      "language": "en"
    },
    "admin": false,
    "system_admin": true,
    "permissions": {
      "edit": true,
      "delete": false
    },
    "avatar": null,
    "userTypes": [
      {
        "id": 1,
        "name": "Manager"
      }
    ],
    "memberGroups": [],
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
    "url": "api/users/3"
  }
}
```

This endpoint retrieves a particular user given as parameter in the URL.

### HTTP Request

`GET http://example.ziik.io/api/users/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

## Get Current User

```bash
curl "http://example.ziik.io/api/users/current"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this

```json
{
  "data": {
    "content_type": "user",
    "id": 3,
    "reference": "ext-243-b4",
    "name": "Cali Medhurst",
    "first_name": "Cali",
    "last_name": "Medhurst",
    "title": "Respiratory Therapy Technician",
    "active": true,
    "ask_about": "Ut inventore sint quia deleniti. Deleniti dolores saepe aspernatur soluta est quis autem.",
    "country": "Seychelles",
    "quote": "Temporibus quis hic omnis iure cupiditate.",
    "description": "Facere ut sequi recusandae et qui aliquam. Et aspernatur voluptas dicta ut amet repudiandae ut ratione. Quas qui amet expedita maiores. Quisquam asperiores expedita enim neque.",
    "phone": "1-840-949-8033 x9847",
    "email": "tremaine80@example.net",
    "birthday": "1990-09-11",
    "policy_accept": false,
    "latest_release": 5,
    "settings": {
      "timezone": "America/Costa_Rica",
      "show_birthdays": "none",
      "birthdays_optout": true,
      "expire": null,
      "language": "en"
    },
    "admin": false,
    "system_admin": true,
    "abilities": {
      "news": true,
      "calendar": true,
      "manuals": false,
      "faq": false,
      "groups": true,
      "quick_links": false,
      "user": false,
      "units": false,
      "supplier": false,
      "schedule": false,
      "shift_trading_request": true,
      "shift_trading_take": false,
      "shift_trading_approve": false,
      "vacation_own": false,
      "vacation_unit": false,
    },
    "permissions": {
      "edit": true,
      "delete": false
    },
    "avatar": null,
    "userTypes": [
      {
        "id": 1,
        "name": "Manager"
      }
    ],
    "memberGroups": [],
    "memberUnits": [
        {
            "abilities": {
                "news": true,
                "calendar": true,
                "manuals": false,
                "faq": false,
                "groups": true,
                "quick_links": false,
                "user": false,
                "units": false,
                "supplier": false,
                "schedule": false,
                "shift_trading_request": true,
                "shift_trading_take": false,
                "shift_trading_approve": false,
                "vacation_own": false,
                "vacation_unit": false,
            },
            "unit": {
                "content_type": "unit",
                "id": 1,
                "name": "HQ",
                "level": 0,
                "unit_type": "unit",
                "parent": null,
                "url": "api/units/1"
            },
            "department": {},
            "userTypes": [
              {
                "id": 1,
                "name": "Employee",
                "abilities": {
                  "news": true,
                  "calendar": true,
                  "manuals": false,
                  "faq": false,
                  "groups": true,
                  "quick_links": false,
                  "user": false,
                  "units": false,
                  "supplier": false,
                  "schedule": false,
                  "shift_trading_request": true,
                  "shift_trading_take": false,
                  "shift_trading_approve": false,
                  "vacation_own": false,
                  "vacation_unit": false,
                }
              }
            ]
        }
    ],
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
    "url": "api/users/3"
  }
}
```

This endpoint retrieves the currently logged in user identified by the authorization header.

### HTTP Request

`GET http://example.ziik.io/api/users/current`

## Get User By Reference

```bash
curl "http://example.ziik.io/api/users/reference/absc-dads"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "content_type": "user",
    "id": 3,
    "reference": "d234a24fa545",
    "name": "Cali Medhurst",
    "first_name": "Cali",
    "last_name": "Medhurst",
    "title": "Respiratory Therapy Technician",
    "active": true,
    "ask_about": "Ut inventore sint quia deleniti. Deleniti dolores saepe aspernatur soluta est quis autem.",
    "country": "Seychelles",
    "quote": "Temporibus quis hic omnis iure cupiditate.",
    "description": "Facere ut sequi recusandae et qui aliquam. Et aspernatur voluptas dicta ut amet repudiandae ut ratione. Quas qui amet expedita maiores. Quisquam asperiores expedita enim neque.",
    "phone": "1-840-949-8033 x9847",
    "email": "tremaine80@example.net",
    "birthday": "1990-09-11",
    "policy_accept": false,
    "latest_release": 5,
    "settings": {
      "timezone": "America/Costa_Rica",
      "show_birthdays": "none",
      "birthdays_optout": true,
      "expire": null,
      "language": "en"
    },
    "admin": false,
    "system_admin": true,
    "permissions": {
      "edit": true,
      "delete": false
    },
    "avatar": null,
    "userTypes": [
      {
        "id": 1,
        "name": "Manager"
      }
    ],
    "memberGroups": [],
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
    "url": "api/users/3"
  }
}
```

This endpoint retrieves a user with the external reference given in the URL.

### HTTP Request

`GET http://example.ziik.io/api/users/reference/REF`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
REF | String | The external reference for the user

## Search For User
```bash
curl "http://example.ziik.io/api/users/search"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "content_type": "user",
      "id": 4,
      "reference": "",
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
      "permissions": {
        "edit": false,
        "delete": false
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

This endpoint searches for active users.

### HTTP Request

`GET http://example.ziik.io/api/users/search`

### Query Parameters

Parameter | Required | Default | Description
--------- | -------- | ------- | -----------
keyword | No | null | String to search for in user's name
email | No | null | Exact email of a user
userTypes | No | null | ID or array of IDs of user types to filter on
units | No | null | ID or array of IDs of units to filter on
units_falldown | No | null | ID or array of IDs of units to filter on with their subunits 
inGroup | No | null | ID of group, the user(s) must be a member of
notInGroup | No | null | ID of group, the user(s) must not be a member of
users | No | null | ID or array of IDS of users to include in the search
content | No | null | ID of content, the user must have view access to
page |  No | 1 | Page number for pagination.
limit | No | 50 | Number of records to return per page.

## Edit User

```bash
curl -i -X PATCH "https://example.ziik.io/api/users/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing user.

### HTTP Request

`PATCH https://example.ziik.io/api/users/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
first_name | String | No | User first name.
last_name | String | No | User last name.
email | String | No | User email address.
reference | String | No | External reference - free text field useful to keep a reference to another system
unit | Integer | No | (Deprecated, [use this instead](https://docs.ziik.io/v2/users/unit-memberships.html#update-user-membership)). Unit, the user belongs to (requires user to have one or fewer units already)
userTypes | Array | No | (Deprecated). Usertype IDs for the user (requires unit)
title | String | No | User's job title
birthday | String | No | User's birthday in YYYY-MM-DD HH:II:SS format
phone | String | No | Phone number
country | String | No | User's home country in ISO Alpha-2 Code format (See http://www.nationsonline.org/oneworld/country_code_list.htm)
quote | String | No | A personal quote for the user
description | String | No | User description.
specialties | Array | No | IDs of specialties for the user
ask_about | String | No | Short sentence about the user's expertise
settings | Array | No | Array of user settings with the following elements
<nobr>- show_birthdays </nobr>| Boolean | No | Whether to show other user's birthdays in this user's calendar
<nobr>- birthdays_optout </nobr>| Boolean | No | If opted out, this user's birthday will not show up in other users' calendar
<nobr>- language </nobr>| String | No | User's language in ISO 639-1 Code - provided the language is available in Ziik
<nobr>- expire </nobr>| Integer | No | Unix timestamp of when this user should expire and automatically be deactivated

### Permissions Required

* Administer permission to users
* Edited user's unit must be same as editing user's unit or below

## Remove User
```bash
curl -i -X DELETE "https://example.ziik.io/api/users/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deactivates a user, meaning that it will be anonymised and personal content removed.
If the transfer parameter is set, personal content will be removed, but shared content will be transferred to the transfer target

### HTTP Request

`DELETE https://example.ziik.io/api/users/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
transfer | Integer | No | If set to the ID of another user, content shared with others will be transferred to that other user

### Permissions Required

* User edit access

## Deactivate User
```bash
curl -i -X POST "https://example.ziik.io/api/users/123/deactivate"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deactivates a user, meaning that after a retention period of 90 days it will be anonymised and personal content removed.

### HTTP Request

`POST https://example.ziik.io/api/users/ID/deactivate`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Permissions Required

* User edit access

## Reactivate User
```bash
curl -i -X POST "https://example.ziik.io/api/users/123/reactivate"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint reactivates a deactivated user that is within the retention period

### HTTP Request

`POST https://example.ziik.io/api/users/ID/reactivate`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Permissions Required

* User edit access