# Group Automatic Membership
Groups can be set to automatically add members based on their unit and user types

## Add New Auto Settings

```bash
curl -i -X POST "https://example.ziik.io/api/groups/543/auto"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint adds units and/or user types to a group's automatic membership.

### HTTP Request

`POST https://example.ziik.io/api/groups/ID/auto`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
units | Array | No | Units for automatic group membership
units_falldown | Array | No | Units (of the ones in 'units' parameter') that should include sub-units
userTypes | Array | No | IDs of the user types for automatic membership

### Permissions Required

* Administrator of group
* Units must be current user's own unit or below

## Delete Membership

```bash
curl -i -X DELETE "https://example.ziik.io/api/groups/543/auto"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on successful update

```http
HTTP/1.0 204 No Content
```

This endpoint deletes units and/or user types from a group's automatic membership settings

### HTTP Request

`DELETE https://example.ziik.io/api/groups/ID/auto`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
units | Array | No | Units to remove from automatic group membership
userTypes | Array | No | IDs of the user types to remove from automatic membership
_method | String | No | If set, should be 'DELETE'

::: tip
Note that the HTTP method is DELETE _with a message body_
If your client is not able to perform a DELETE request with a message body,
use a POST request and set the _method parameter to 'DELETE'
:::  

### Permissions Required

* Administrator of group

::: tip
Group administrators can remove any unit or user type from automatic membership, but only add units from own unit and below
:::