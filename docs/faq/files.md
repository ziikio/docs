# Files

## Delete File From FAQ
```bash
curl -i -X DELETE "https://example.ziik.io/api/faq/124/files/12345"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a file from an FAQ.

### HTTP Request

`DELETE https://example.ziik.io/api/faq/FAQID/files/FILEID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
FAQID | Integer | The ID of the FAQ
FILEID | Integer | The ID of the file to delete

### Permissions Required

* FAQ edit access