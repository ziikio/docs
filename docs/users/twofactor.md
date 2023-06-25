# Two Factor Settings

## Get User's Two-Factor Settings

```bash
curl "https://example.ziik.io/api/two-factor"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "method": "google",
    "secret_key": "1234567890",
    "phone_prefix": null,
    "phone": null,
    "verified": false
  }
}
```

Get the current user's two-factor authentication settings

### HTTP Request

`GET https://example.ziik.io/api/two-factor`

## Update Two-Factor Settings

```bash
curl -i -X PATCH "https://example.ziik.io/api/two-factor"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint replaces the current user's two-factor settings with the provided values.

### HTTP Request

`PATCH https://example.ziik.io/api/two-factor`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
method | String | Yes | Authentication method. Can be 'google', 'sms' - or empty, in which case two-factor is disabled for the current user
secret_key | String | If using 'google' method | Set the secret key from Google Authenticator app
phone_prefix | Integer | If using 'sms' method | Country code for phone number
phone | Integer | If using 'sms' method | Phone number without country code

## Get QR Code

```bash
curl GET "https://example.ziik.io/api/two-factor/qr"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": {
    "qr_image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFDklEQVR4nO3d224kJxhG0cwo7\/\/IVm6iUUsJCgzsOjhrXVqYKrc+YQT0z4+vr68\/4LSfd78A35NgkRAsEoJFQrBICBYJwSIhWCQEi4RgkRAsEoJFQrBICBYJwSIhWCQEi4RgkRAsEoJFQrBICBYJwSIhWCQEi8SfZ7v7+fN8Ukff1f581s73uUfvvNrn6t8+0\/\/ob7zyc\/49RiwSgkVCsEgcnmN9KuY9M3OL1TnT6hxu9POZNqvvOfMZFp\/zPiMWCcEiIVgkwjnWp5n\/5avzic8+V+dVq\/OnkZnnzvR5aq3u1Oe8z4hFQrBICBaJi+ZYp6zOaUZOzZ9G7U\/Nq97rO\/wNPJBgkRAsEi+bY+2sS+30P3rWjFP7hu9ixCIhWCQEi8RFc6xTc4XVvbPV+dapM1LFubEZz5mTGbFICBYJwSIRzrGesOe1eu7q1M8\/rfYz8\/6jNs\/xxHfiGxAsEoJF4sdzVj4Kp86kj\/rcmT\/tPOv5jFgkBIuEYJF4UH2sU\/WfVteTRk7VgNips3XX2ts+IxYJwSIhWCQOr2Od2tuq647OvE9Rg7Q4s1\/U5dpnxCIhWCQEi8ThdaxTNRRm6nyO1DVIZ9rs7BsW56uurBf\/d89Rv\/zPCRYJwSIRnsc6VTfhVH3RmTanfnfk1L7hapvrGbFICBYJwSJx0XmsYj9rZ25xqj5CcV6+fh97hbyYYJEQLBI33Fe4c\/ffqb251XeeaX\/l\/GnU5lSf+4xYJASLhGCRuLnO+6nz3afa75yXunLPcaaf1TZnGbFICBYJwSLxgvNYM\/3Xe447\/dx1PmxE7QZeTLBICBaJG9axnnAG6wnzv\/p3P12\/vmXEIiFYJASLRFgf69Nd3wGc8YT6WDv9PLOOvBGLhGCRECwSF61j7ZwxOvWsU\/Wxds5sFXdOz3w\/4HpGLBKCRUKwSNxQg\/TKmpz12lhdc3VnvljU65pnxCIhWCQEi8SD9gpHitruq\/2M+qzvujm1B1rUgPiPpx\/sC34RLBKCReKG+lj1fKg42766B1esjRVrTtaxeBnBIiFYJMLaDSM7857iO3erTtV9mOn\/VD\/XrF19MmKRECwSgkUi3Css6nZe+dxTNatGTn3y9+4JjhixSAgWCcEicdF5rE\/1XS4799vcVQOivk96hvNYvIBgkRAsEhfVbnjCetXM+xR7f6tO3dU402fHiEVCsEgIFomH7hWO2sw8d6TYI9u5x2bGlWt+ZxmxSAgWCcEicfM61qjNyGhOU9\/HvLP\/ONPP6rM+PaFW\/r888WBf8ItgkRAsEhetY82033HXHTv13UE77q1HasQiIVgkBIvEDbUbdtRn6k+te830OVLsmboTmm9CsEgIFonDe4VPOzO0M9\/aqR066mfG6r2HV64XzjNikRAsEoJF4oY67zNO1XB\/Wj+n1oqeVi\/+n4xYJASLhGCRuOjMe3Ev4epcYWd9aLU+wsgT6tRf403vyosIFgnBInHRHKs2833DTzvzs9Fzd\/qvazq4E5pvQrBICBaJF8+x6hrup85jjdrU9cBG7a+pR2rEIiFYJASLxA31sYo+T32fbmYPcfUdZt7n1HcG63sh5xmxSAgWCcEiEc6x6vNDT6gFWp8PG7X\/dOruanuFvIBgkRAsEi+rj8VbGLFICBYJwSIhWCQEi4RgkRAsEoJFQrBICBYJwSIhWCQEi4RgkRAsEoJFQrBICBYJwSIhWCQEi4RgkRAsEoJFQrBI\/AUohfEWPts8rQAAAABJRU5ErkJggg=="
  }
}
```

This endpoint returns 200 OK and the QR code for Google Authenticator as base64 encoded string in JSON content.

### HTTP Request

`GET https://example.ziik.io/api/two-factor/qr`

## Generate a New Secret

```bash
curl GET "https://example.ziik.io/api/two-factor/secret"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": {
    "secret_key": "T42NQXFCPWEJMGJY"
  }
}
```

This endpoint returns 200 OK and a new secret for Google Authenticator app

### HTTP Request

`GET https://example.ziik.io/api/two-factor/secret`

## Send SMS Verification Code

```bash
curl -i -X POST "https://example.ziik.io/api/two-factor/send-verification"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint triggers a verification code to be sent by SMS to the user - if the user has SMS method

### HTTP Request

`POST https://example.ziik.io/api/two-factor/send-verification`

## Verify Two-Factor Authentication

```bash
curl -i -X POST "https://example.ziik.io/api/two-factor/verify"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint verifies the user's two-factor authentication method

### HTTP Request

`POST https://example.ziik.io/api/two-factor/verify`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
key | String | Yes | Code sent via SMS or from Google Authenticator

## Reset Two-Factor Authentication

```bash
curl -i -X POST "https://example.ziik.io/api/two-factor/reset"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint resets the two-factor settings for a user

### HTTP Request

`POST https://example.ziik.io/api/users/ID/two-factor/reset`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer| User ID of the user, who should have Two-Factor authentication reset

### Permissions Required

* Current user must have edit permissions to the user from URL
