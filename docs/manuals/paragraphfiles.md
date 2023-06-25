# Paragraph files

## Delete File From Paragraph

```bash
curl -i -X DELETE "https://example.ziik.io/api/paragraphs/124/files/12345"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a file from a paragraph.

### HTTP Request

`DELETE https://example.ziik.io/api/paragraphs/PARAGRAPHID/files/FILEID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
PARAGRAPHID | Integer | The ID of the paragraph
FILEID | Integer | The ID of the file to delete

### Permissions Required

* Manual edit access