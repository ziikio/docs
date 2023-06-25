# TwoFactor

TwoFactor settings control which two factor authentication methods are available to users

## Enable Method

```bash
curl -i -X POST "https://example.ziik.io/api/settings/twofactor/google"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint enables a two factor authentication method

### HTTP Request

`POST https://example.ziik.io/api/settings/twofactor/METHOD`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
METHOD | String | Name of method to enable - can be 'google' or 'sms'

### Permissions Required
* User is administrator

## Disable Method

```bash
curl -i -X DELETE "https://example.ziik.io/api/settings/twofactor/google"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint disables a two factor authentication method

### HTTP Request

`DELETE https://example.ziik.io/api/settings/twofactor/METHOD`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
METHOD | String | Name of method to disable

### Permissions Required
* User is administrator

## Force Two Factor Authentication

```bash
curl -i -X POST "https://example.ziik.io/api/settings/twofactor/force"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint sets two factor authentication to be forced for all users

### HTTP Request

`POST https://example.ziik.io/api/settings/twofactor/force`

### Permissions Required
* User is administrator

## Disable Two Factor Authentication force

```bash
curl -i -X DELETE "https://example.ziik.io/api/settings/twofactor/force"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint disables enforcement of two factor authentication

### HTTP Request

`DELETE https://example.ziik.io/api/settings/twofactor/force`

### Permissions Required
* User is administrator