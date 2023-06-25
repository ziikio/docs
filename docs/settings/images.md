# Images

## Remove Image

```bash
curl -i -X DELETE "https://example.ziik.io/api/settings/images/logo"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint removes an image

### HTTP Request

`DELETE https://example.ziik.io/api/settings/images/logo`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
TYPE | String | Name of image to set/replace - can be 'logo', 'mobileLogo', 'mobileBg' or 'mobileIcon'

### Permissions Required
* User is administrator