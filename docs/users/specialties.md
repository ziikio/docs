# Specialties

## Create User Specialty

```bash
curl -i -X POST "https://example.ziik.io/api/users/specialties"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created specialty

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/users/specialties/1234
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/users/specialties/1"
  }
}
```

This endpoint creates a new user specialty.

### HTTP Request

`POST https://example.ziik.io/api/users/specialties`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Category name

### Permissions Required

* User is administrator

## Get User Specialties

```bash
curl "https://example.ziik.io/api/users/specialties"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 9,
      "name": "delectus",
      "url": "api/users/specialties/9"
    },
    {
      "id": 8,
      "name": "eius",
      "url": "api/users/specialties/8"
    },
    {
      "id": 10,
      "name": "et",
      "url": "api/users/specialties/10"
    }
  ]
}
```

This endpoint retrieves a list of user specialties.

### HTTP Request

`GET https://example.ziik.io/api/users/specialties`

### Query Parameters

None

## Get Single User Specialty
```bash
curl "https://example.ziik.io/api/users/specialties/1"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/users/specialties/1"
  }
}
```

### HTTP Request

`GET https://example.ziik.io/api/users/specialties/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the specialty

### Permissions Required

* Authenticated user

## Edit User Specialty

```bash
curl -i -X PATCH "https://example.ziik.io/api/users/specialties/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing user specialty.

### HTTP Request

`PATCH https://example.ziik.io/api/users/specialties/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | New specialty name

### Permissions Required

* User is administrator

## Delete User Specialty

```bash
curl -i -X DELETE "https://example.ziik.io/api/users/specialties/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a user specialty.

### HTTP Request

`DELETE https://example.ziik.io/api/users/specialties/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the specialty to delete

### Permissions Required

* User is administrator