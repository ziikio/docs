# Groups

Groups are places for discussions where anyone can participate across units and user types.

Groups can be public (anyone can see and join, in order to participate in the group discussions), private (anyone can see the group and request to join, but not see content until request is approved) or hidden (group is not listed anywhere, but group administrators can manually add members)

## Create New Group

```bash
curl -i -X POST "https://example.ziik.io/api/groups"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the new group

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/groups/1234
{
  "data": {
    "id": 1,
    "content_type": "group",
    "name": "New Group",
    "description": "Description goes here",
    "type": "public",
    "stats": {
      "active": 1,
      "pending": 0
    },
    "interaction": {
      "unseen": 0
    },
    "image": null,
    "auto": {
      "units": [
        {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/1"
        }
      ],
      "userTypes": [
        {
          "id": 1,
          "name": "Manager"
        },
        {
          "id": 2,
          "name": "Employee"
        }
      ]
    },
    "membership": {
        "auto": false
    },
    "url": "api/groups/1",
    "permissions": {
      "member": "admin",
      "edit": true,
      "delete": true
    }
  }
}
```
This endpoint creates a new group with the current user as administrator.

### HTTP Request

`POST https://example.ziik.io/api/groups`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Name of the new group.
description | String | No | Description of the new group.
type | String | No | 'public' or 'private'. Public means anyone can see and join. Private means only members can see it, but administrators can add members manually.

### Permissions Required

* Access to create a new group

## Get Groups

```bash
curl "https://example.ziik.io/api/groups"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "content_type": "group",
      "name": "aliquam",
      "description": "Et accusantium et ipsam laudantium. Debitis id velit sit possimus ratione nam ducimus et.",
      "type": "public",
      "stats": {
        "active": 1
      },
      "interaction": {
        "unseen": 0
      },
      "url": "api/groups/2",
      "permissions": {
        "member": "member",
        "edit": false,
        "delete": false
      }
    },
    {
      "id": 1,
      "content_type": "group",
      "name": "assumenda",
      "description": "Aut perspiciatis deleniti cumque aut vel. Explicabo dolor laboriosam quos soluta non aut tenetur.",
      "type": "public",
      "stats": {
        "active": 1
      },
      "interaction": {
        "unseen": 0
      },
      "url": "api/groups/1",
      "permissions": {
        "member": "member",
        "edit": false,
        "delete": false
      }
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/groups?page=1",
    "last": "https://example.ziik.io/api/groups?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/groups",
    "per_page": 50,
    "to": 2,
    "total": 2
  }
}
```

This endpoint retrieves a list of groups.

By default groups, the user is a member of, are returned, but it can also return non-member groups, the user can join or request to join.

### HTTP Request

`GET https://example.ziik.io/api/groups`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
mode | String | member | 'member' or 'available' to return member groups and non-member groups, respectively
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Search for Groups

```bash
curl "https://example.ziik.io/api/groups/search/group"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "content_type": "group",
      "name": "aliquam",
      "description": "Et accusantium et ipsam laudantium. Debitis id velit sit possimus ratione nam ducimus et.",
      "type": "public",
      "stats": {
        "active": 1
      },
      "interaction": {
        "unseen": 0
      },
      "url": "api/groups/2",
      "permissions": {
        "member": "member",
        "edit": false,
        "delete": false
      }
    },
    {
      "id": 1,
      "content_type": "group",
      "name": "assumenda",
      "description": "Aut perspiciatis deleniti cumque aut vel. Explicabo dolor laboriosam quos soluta non aut tenetur.",
      "type": "public",
      "stats": {
        "active": 1
      },
      "interaction": {
        "unseen": 0
      },
      "url": "api/groups/1",
      "permissions": {
        "member": "member",
        "edit": false,
        "delete": false
      }
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/groups?page=1",
    "last": "https://example.ziik.io/api/groups?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/groups",
    "per_page": 50,
    "to": 2,
    "total": 2
  }
}
```

This endpoint retrieves a list of groups with a name similar to a search string.

By default groups, the user is a member of, are returned, but it can also return non-member groups, the user can join or request to join.

### HTTP Request

`GET https://example.ziik.io/api/groups/search/<KEYWORD>`

### URL Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
keyword | String | NULL | Keyword to search for. Searches group name, not content.

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
mode | String | member | 'member' or 'available' to return member groups and non-member groups, respectively
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Single Group

```bash
curl "https://example.ziik.io/api/groups/543"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "group",
    "name": "minus",
    "description": "Aspernatur ducimus omnis ut molestiae.",
    "type": "public",
    "stats": {
      "active": 1
    },
    "interaction": {
      "unseen": 0
    },
    "image": null,
    "membership": {
      "auto": true
    },
    "url": "api/groups/1",
    "permissions": {
      "member": "member",
      "edit": false,
      "delete": false
    }
  }
}
```

This endpoint returns a single group

### HTTP Request

`GET https://example.ziik.io/api/groups/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Permissions Required

* Authenticated user

## Edit Existing Group

```bash
curl -i -X PATCH "https://example.ziik.io/api/groups/543"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful group update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing group.

### HTTP Request

`PATCH https://example.ziik.io/api/groups/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Name of the new group.
description | String | No | Description of the new group.
type | String | No | 'public' or 'private'. Public means anyone can see and join. Private means only members can see it, but administrators can add members manually.

### Permissions Required

* Administrator of group

## Delete a Group

```bash
curl -i -X DELETE "https://example.ziik.io/api/groups/543"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a group along with all its debates.

### HTTP Request

`DELETE https://example.ziik.io/api/groups/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group to delete

### Permissions Required

* Administrator of group