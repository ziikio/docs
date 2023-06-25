# Get Files

## Download File

```bash
curl "https://example.ziik.io/api/file/123"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

Files connected to content show a file URL leading to this endpoint.

This endpoint transfers the file contents directly.

### HTTP Request

`GET https://example.ziik.io/api/file/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the file

### Permissions Required

* Read access to the content, the file belongs to

## Get File Preset

```bash
curl "https://example.ziik.io/api/file/123/detail"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

Files connected to content show a file URL leading to this endpoint.

This endpoint transfers the file contents directly.

### HTTP Request

`GET https://example.ziik.io/api/file/ID/PRESET`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the file
PRESET | String | The desired preset - can be 'detail', 'listing', 'thumbnail', 'cropLarge', 'cropMedium', 'cropSmall', 'chat', 'largeSquare', 'smallSquare', 'portrait', 'landscape'

### Permissions Required

* Read access to the content, the file belongs to
