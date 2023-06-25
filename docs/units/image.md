# Image

## Delete Image From Unit
```bash
curl -i -X DELETE "https://example.ziik.io/api/units/123/image"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes the image from a unit.

### HTTP Request

`DELETE https://example.ziik.io/api/units/ID/image`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the unit

### Permissions Required

* Unit edit access