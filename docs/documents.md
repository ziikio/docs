# Documents

Documents are files placed in folders.

Documents do not have individual permissions, but inherit them from the folder, they are in. Hence, everyone, who can see a folder, can see all documents therein, and everyone, who can edit a folder, can edit documents in it.

## Get Documents in a Folder

```bash
curl "https://example.ziik.io/api/folders/121/documents"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 3,
      "content_type": "document",
      "title": "aut",
      "folder": 1,
      "date": 1540459415,
      "file": {
        "id": 3,
        "name": "aut",
        "mime": "video/vimeo",
        "size": 0,
        "type": "video",
        "extension": "unknown",
        "processing": false,
        "uploaded": true,
        "date": 1540459415,
        "source": "https://vimeo.com/2057011767",
        "stream": [],
        "versions": [],
        "screenshot": [],
        "created_at": 1540459337,
        "updated_at": 1540459337,
        "created_formatted": "25 October 2018",
        "updated_formatted": "25 October 2018"
      },
      "url": "api/documents/3"
    },
    {
      "id": 2,
      "content_type": "document",
      "title": "eum",
      "folder": 1,
      "date": 1540459415,
      "file": {
        "id": 2,
        "name": "eum",
        "mime": "video/vimeo",
        "size": 0,
        "type": "video",
        "extension": "unknown",
        "processing": false,
        "uploaded": true,      
        "source": "https://vimeo.com/2063524963",
        "stream": [],
        "versions": [],
        "screenshot": [],
        "date": 1540459415,
        "created_at": 1540459337,
        "updated_at": 1540459337,
        "created_formatted": "25 October 2018",
        "updated_formatted": "25 October 2018"
      },
      "url": "api/documents/2"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/folders/1/documents?page=1",
    "last": "https://example.ziik.io/api/folders/1/documents?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/folders/1/documents",
    "per_page": 50,
    "to": 5,
    "total": 5
  }
}
```

This endpoint returns documents in a folder

### HTTP Request

`GET https://example.ziik.io/api/folders/ID/documents`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the folder to retrieve documents from

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 500 | Number of records to return per page.

### Permissions Required

* Access to folder

## Get Single Document

```bash
curl "https://example.ziik.io/api/documents/1221"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "document",
    "title": "natus",
    "folder": 1,
    "date": 1540459337,
    "file": {
      "id": 1,
      "name": "natus",
      "mime": "video/vimeo",
      "size": 0,
      "type": "video",
      "extension": "unknown",
      "processing": false,
      "uploaded": true,
      "source": "https://vimeo.com/2004802696",
      "stream": [],
      "versions": [],
      "screenshot": [],
      "date": 1540459337,
      "created_at": 1540459337,
      "updated_at": 1540459337,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    },
    "url": "api/documents/1"
  }
}
```

This endpoint returns a single document.

### HTTP Request

`GET https://example.ziik.io/api/documents/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the document

### Permissions Required

* Access to document folder

## Edit Existing Document

```bash
curl -i -X PATCH "https://example.ziik.io/api/documents/1221"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"name\": \"A New Document Name\", \"folder\": 123}"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```
This endpoint updates an existing document.

### HTTP Request

`PATCH https://example.ziik.io/api/documents/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | New name of the document.
folder | Integer | No | New folder.

### Permissions Required

* Manage access to folder
* OR uploader of file

## Delete a Document

```bash
curl -i -X DELETE "https://example.ziik.io/api/documents/1221"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a document.

### HTTP Request

`DELETE https://example.ziik.io/api/documents/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the document to delete

### Permissions Required

* Manage access to folder