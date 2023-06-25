# Group Membership

## Add New Member

```bash
curl -i -X POST "https://example.ziik.io/api/groups/543/members"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find membership details

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/groups/543/members/92
{
    "message": "Test User added"
}
```

This endpoint adds a user to the group.

IF the current user is not a member of the group, the user ID can be omitted as it will be regarded as a join request (automatically accepted for public groups)

### HTTP Request

`POST https://example.ziik.io/api/groups/ID/members`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
user | Integer | Yes (for add) | User ID of the user to add.

### Permissions Required

* Administrator of group (add)
* OR not member of group (join)

## Get Group Members

```bash
curl "https://example.ziik.io/api/groups/432/members"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "content_type": "user",
      "id": 3,
      "name": "Lisa Conn",
      "first_name": "Lisa",
      "last_name": "Conn",
      "title": "Forest and Conservation Technician",
      "avatar": null,
      "active": true,
      "membership": {
        "member": "member",
        "auto": false      
      },
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "url": "api/units/1"
      },
      "url": "api/users/3"
    }
  ],
  "links": {
    "first": "https://example.ziik.io /api/groups/1/members?page=1",
    "last": "https://example.ziik.io/api/groups/1/members?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/groups/1/members",
    "per_page": 50,
    "to": 1,
    "total": 1
  }
}
```

This endpoint retrieves a list of members of a group.

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/members`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
status | String | member | Membership status to fetch - 'member', 'admin' or 'active' (= members & admins).


### Permissions Required

* Member of group

## Search Users Not In Group
```bash
curl -i -X GET "https://example.ziik.io/api/groups/123/users"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "content_type": "user",
      "id": 4,
      "name": "Gavin Hermiston",
      "first_name": "Gavin",
      "last_name": "Hermiston",
      "title": "Municipal Court Clerk",
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
      "url": "api/users/4"
    }
  ]
}
```

This endpoints returns a list of users NOT in a group that matches a search string.

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/users`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | ------: | -----------
q | String | Yes | Search string for user's name

## Edit Membership

```bash
curl -i -X PATCH "https://example.ziik.io/api/groups/543/members/321"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update

```http
HTTP/1.0 204 No Content
```

This endpoint updates a user's membership in the group.

### HTTP Request

`PATCH https://example.ziik.io/api/groups/ID/members/USERID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
status | Integer | No | Membership status to set 1 = member, 2 = administrator

### Permissions Required

* Administrator of group

::: tip
Group administrator cannot set themselves as common members. In this case, another administrator must change the membership status.
:::

## Delete Membership

```bash
curl -i -X DELETE "https://example.ziik.io/api/groups/543/members/321"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on successful update

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a user's membership in the group, effectively removing the user from the group

### HTTP Request

`DELETE https://example.ziik.io/api/groups/ID/members/USERID`

### Permissions Required

* Either Administrator of group
* OR User being removed from the group

::: tip
Group administrator cannot remove themselves from it. In this case, another administrator must remove the user from the group.
:::