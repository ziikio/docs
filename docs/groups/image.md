# Group Image

## Delete Image From Group
```bash
curl -i -X DELETE "https://example.ziik.io/api/groups/124/image"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes the image from a group.

### HTTP Request

`DELETE https://example.ziik.io/api/groups/ID/image`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Permissions Required

* Group administrator