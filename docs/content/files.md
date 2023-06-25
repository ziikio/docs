# Files

## Delete File From Content
```bash
curl -i -X DELETE "https://example.ziik.io/api/content/124/files/12345"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a file from a content post.

### HTTP Request

`DELETE https://example.ziik.io/api/content/<CONTENTID>/files/<FILEID>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
CONTENTID | Integer | The ID of the content
FILEID | Integer | The ID of the file to delete

### Permissions Required

* Event edit access