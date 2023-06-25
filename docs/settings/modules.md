# Modules

Modules are part of the Ziik system that can be enabled or disabled

## Enable Module

```bash
curl -i -X POST "https://example.ziik.io/api/settings/modules/news"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint enables a module

### HTTP Request

`POST https://example.ziik.io/api/settings/modules/MODULE`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
MODULE | String | Name of module to enable

### Permissions Required
* User is administrator

## Disable Module

```bash
curl -i -X DELETE "https://example.ziik.io/api/settings/modules/news"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint disables a module

### HTTP Request

`DELETE https://example.ziik.io/api/settings/modules/MODULE`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
MODULE | String | Name of module to disable

### Permissions Required
* User is administrator