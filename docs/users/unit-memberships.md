# Unit Memberships

## List Unit Memberships

```bash
curl "https://example.ziik.io/api/users/1/units"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "abilities": [],
    "unit": [See unit JSON],
    "department": [See department JSON],
    "userTypes": [
      [See user type json]    
    ],
    "permissions": [
        "edit": true,
        "delete": false
    ]
  }
}
```

### HTTP Request

`GET https://example.ziik.io/api/users/ID/units`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Permissions Required

* Permission to edit the user

## Add User Membership

```bash
curl -i -X POST "https://example.ziik.io/api/users/1/units"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```


> The above command returns 201 Created

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/users/1/units
{
  "data": {
    "unit": {},
    "department": {},
    "userTypes": [{}]
  }
}
```

This endpoint adds a user to a unit.

### HTTP Request

`POST https://example.ziik.io/api/users/ID/units`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
unit | Integer | Yes | ID of unit to add to the user
department | Integer | No | Department in the chosen unit to assign to the membership
userTypes | Array | No | Array of IDs of user types to grant the user for the membership

### Permissions Required

* Permission to edit the user
* Unit must be in or below a unit the current user has users permission for
 
 ## Update User Membership
 
 ```bash
 curl -i -X PATCH "https://example.ziik.io/api/users/1/units/2"
   -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
   -d "{ [...] }"
 ```
 
 
 > The above command returns 204 No Content
 
 ```http
 HTTP/1.0 204 No Content
 ```
 
 This endpoint updates a user's unit membership.
 
 ### HTTP Request
 
 `PATCH https://example.ziik.io/api/users/ID/units/UNITID`
 
 ### URL Parameters
 
 Parameter | Type | Description
 --------- | ---- | -----------
 ID | Integer | The ID of the user
 UNITID | Integer | The ID of the (current) unit of the membership
 
 ### Request Parameters
 
 Parameter | Type | Required | Description
 --------- | ---- |  ------- | -----------
 unit | Integer | No | ID of unit to change for the user membership
 department | Integer | No | Department in the chosen unit to assign to the membership
 userTypes | Array | No | Array of IDs of user types to grant the user for the membership
 
 ### Permissions Required
 
 * Permission to edit the user
 * New unit must be in or below a unit the current user has users permission for
 
 ## Delete User Membership
  
  ```bash
  curl -i -X DELETE "https://example.ziik.io/api/users/1/units/2"
    -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
    -d "{ [...] }"
  ```
  
  > The above command returns 204 No Content
  
  ```http
  HTTP/1.0 204 No Content
  ```
  
  This endpoint updates a user's unit membership.
  
  ### HTTP Request
  
  `PATCH https://example.ziik.io/api/users/ID/units/UNITID`
  
  ### URL Parameters
  
  Parameter | Type | Description
  --------- | ---- | -----------
  ID | Integer | The ID of the user
  UNITID | Integer | The ID of the (current) unit of the membership
  
  ### Permissions Required
  
  * Permission to edit the user
  