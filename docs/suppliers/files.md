# Files

## Delete File From Supplier
```bash
curl -i -X DELETE "https://example.ziik.io/api/suppliers/124/files/12345"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a file from a supplier.

### HTTP Request

`DELETE https://example.ziik.io/api/suppliers/SUPPLIERID>/files/<FILEID>`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
SUPPLIERID | Integer | The ID of the supplier
FILEID | Integer | The ID of the file to delete

### Permissions Required

* Supplier edit access