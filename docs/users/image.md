# Avatar

## Add Avatar To User
See documentation for [Upload file](https://docs.ziik.io/v2/file/upload.html).

## Delete Avatar From User
```bash
curl -i -X DELETE "https://example.ziik.io/api/users/123/image"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes an image from a user.

### HTTP Request

`DELETE https://example.ziik.io/api/users/ID/image`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the user

### Permissions Required

* User edit access