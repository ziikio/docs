# Device Registration
In order to be able to send notifications to a smartphone user, we need the app to register with Ziik

## Get Devices

```bash
curl "https://example.ziik.io/api/devices"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "data": [
      {
        "id": 123,
          "device": "someDeviceID",
          "os": "ios",
          "info": "",
      }
    ]
}
```

This endpoint returns the devices registered for the current user.

## Register App Device

```bash
# Register app device
curl -i -X POST "https://example.ziik.io/api/devices"
  -d '{"device":"thisisadeviceID","os":"iOS"}'

```

> The above command returns 204 No Content on successful registration.

```http
HTTP/1.0 204 No Content
```

This endpoint registers a device ID with the current user and specifies which smartphone OS family is used.

::: tip
A user can have multiple device IDs registered, but a device ID can only be registered to one user. Registering the same device ID to a new user will remove it from the previous user.
:::

### HTTP Request

`POST https://example.ziik.io/api/devices`
### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
device | String | Yes | Device ID
os | String | Yes | 'iOS' or 'android'
info | Array | no | Any data that should be registered with the device

### Permissions Required
* Authenticated user

## Unregister App Device

```bash
# Unregister app device
curl -i -X DELETE "https://example.ziik.io/api/devices"
  -d '{"device":"thisisadeviceID"}'

```

> The above command returns 204 No Content on successful unregistration.

```http
HTTP/1.0 204 No Content
```

This endpoint unregisters a device ID from the current user.

### HTTP Request

`DELETE https://example.ziik.io/api/devices`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
device | String | Yes | Device ID

### Permissions Required
* Authenticated user