# Files

## Delete File From Comment
```bash
curl -i -X DELETE "https://example.ziik.io/api/comments/124/files/12345"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a file from a comment.

### HTTP Request

`DELETE https://example.ziik.io/api/comments/COMMENTID/files/FILEID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
COMMENTID | Integer | The ID of the comment
FILEID | Integer | The ID of the file to delete

### Permissions Required

* Edit permission to commented content
* OR Comment author

::: tip
Authors can only remove files from comments within 15 minutes of creation.
:::