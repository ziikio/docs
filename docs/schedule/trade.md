# Shift trade

## Apply for Shift Trade

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/123/apply"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint adds the requesting user to the applicants list for this shift.

### HTTP Request

`POST https://example.ziik.io/api/shifts/ID/apply`

### Request Parameters

None

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the shift

### Permissions Required

* Request & Apply permission
* Shift is open for trade
* Shift is NOT assigned to the requesting user

## Request Shift Trade

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/123/request"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint opens a shift for trade.

### HTTP Request

`POST https://example.ziik.io/api/shifts/ID/request`

### Request Parameters

None

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the shift

### Permissions Required

* Request & Apply permission
* Shift is NOT open for trade
* Shift is assigned to the requesting user

## Take Trade Shift

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/123/take"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint takes a shift - i.e. assigns it to the current user.

### HTTP Request

`POST https://example.ziik.io/api/shifts/ID/take`

### Request Parameters

None

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the shift

### Permissions Required

* Take without approval permission
* Shift is open for trade
* Shift is NOT assigned to the requesting user

## Approve Shift Trade

```bash
curl -i -X POST "https://example.ziik.io/api/shifts/123/approve/234"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint assigns a shift to another user.

### HTTP Request

`POST https://example.ziik.io/api/shifts/SHIFTID/approve/USERID`

### Request Parameters

None

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
SHIFTID | Integer | The ID of the shift
USERID | Integer | The ID of user to approve the shift trade for

### Permissions Required

* Approve shift trade permission
* Shift is open for trade
* Shift is NOT assigned to the user in the URL