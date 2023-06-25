# Manual Cover Image

## Delete Image From Manual
```bash
curl -i -X DELETE "https://example.ziik.io/api/manuals/124/image"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes the cover image from a manual.

### HTTP Request

`DELETE https://example.ziik.io/api/manuals/ID/image`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the manual

### Permissions Required

* Manual edit access