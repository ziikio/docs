# Authentication

To authorize, you will need to authenticate with the service and get an access token for use with the API

## Authenticate

```bash
# Authenticate with username password
curl "https://example.ziik.io/api/authenticate"
  -d '{"username":"example@example.com","password":"thisIsMyPassword"}'

```

::: warning
Make sure to replace `example@example.com` with your email address and `thisIsMyPassword` with your password.
:::

> The above command returns JSON structured like this:

```json
[
  {
    "jwt": "aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc",
    "expires": 12345678
  }
]
```

> "expires" is the Unix timestamp of when the access token is no longer valid

### HTTP Request

`POST http://example.ziik.io/api/authenticate`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
username | false | Username (email address) of the user authenticating.
password | false | Password for the user's account.

Ziik API expects for the access token to be included in all other API requests to the server in a header that looks like the following:

`Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc`

::: tip
You must replace <code>aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc</code> with the access token returned from the authenticate request.
:::

::: tip
All timestamps in Ziik API are Unix Timestamps.
:::

## Renew Access Token

```bash
# Renew without other parameters than the Authorization header
curl "https://example.ziik.io/api/renew"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"

```

> The above command returns JSON structured like this:

```json
[
  {
    "jwt": "aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc",
    "expires": 12345678
  }
]
```

Before an access token expires, it can be renewed by calling the /renew endpoint

### HTTP Request

`POST http://example.ziik.io/api/renew`

::: warning
Remember to provide the access token in the Authorization header
:::

## Request new password

```bash
curl -i -X POST "https://example.ziik.io/api/password/request"
    -d '{"email":"mail@example.com"}'
```

> The above command returns 204 No Content on successful registration of reset request. An email will be sent to the user with instructions on how to reset the password

```http
HTTP/1.0 204 No Content
```

This endpoint sends a password reset email with a one-time token to be used with /password/reset to set the new password.

::: tip
Only users with access managed by Ziik will be able to request a new password. Externally managed users (through integrations) that handle authentication, cannot use this process.
:::

### HTTP Request

`POST https://example.ziik.io/api/password/request`
### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
email | String | Yes | Email address of user to reset password for

### Permissions Required
* None

## Set new password

```bash
curl -i -X POST "https://example.ziik.io/api/password/reset"
    -d '{"token":"asd234f234asd32","email":"mail@example.com","password":"newpassword","password_confirm":"newpassword"}'
```

> The above command returns 204 No Content on successful password change

```http
HTTP/1.0 204 No Content
```

This endpoint sets a new password for the user

::: tip
Only users with access managed by Ziik will be able to set a new password. Externally managed users (through integrations) that handle authentication, cannot use this process.
:::

### HTTP Request

`POST https://example.ziik.io/api/password/reset`
### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
token | String | Yes | Token obtained from email following /password/request
email | String | Yes | Email address of user to reset password for
password | String | Yes | New password to set for the user
password_confirm | String | Yes | Confirmation of new password to ensure they are identical

### Permissions Required
* None
