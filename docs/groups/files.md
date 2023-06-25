# Group Files
Files uploaded to any debate in a group are accessible with the following endpoints.

## Get Group Files Of Any Type
```bash
curl -i -X GET "https://example.ziik.io/api/groups/123/files"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 3,
      "name": "testfile.jpg",
      "mime": "image/jpeg",
      "size": 35431,
      "height": 342,
      "width": 640,
      "type": "image",
      "extension": "jpg",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/3/1540465893",
      "stream": [],
      "versions": {
        "listing": "https://example.ziik.io/api/file/3/listing/1540465893",
        "detail": "https://example.ziik.io/api/file/3/detail/1540465893",
        "thumbnail": "https://example.ziik.io/api/file/3/thumbnail/1540465893",
        "crop_large": "https://example.ziik.io/api/file/3/cropLarge/1540465893",
        "crop_medium": "https://example.ziik.io/api/file/3/cropMedium/1540465893",
        "crop_small": "https://example.ziik.io/api/file/3/cropSmall/1540465893",
        "chat": "https://example.ziik.io/api/file/3/chat/1540465893"
      },
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    },
    {
      "id": 4,
      "name": "testfile.xlsx",
      "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "size": 5981,
      "type": "application",
      "extension": "xlsx",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/4/1540465893",
      "stream": [],
      "versions": [],
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    },
    {
      "id": 7,
      "name": "testfile.mp4",
      "mime": "video/mp4",
      "size": 4710555,
      "type": "video",
      "extension": "mp4",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/7/1540465893",
      "stream": "https://example.ziik.io/api/file/7/1540465893",
      "versions": [],
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    }
  ],
  "links": {
    "first": "/?page=1",
    "last": "/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/groups/1234/files",
    "per_page": 50,
    "to": 3,
    "total": 3
  }
}
```

This endpoints returns a list of files of any type within a given group

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/files`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Group Images
```bash
curl -i -X GET "https://example.ziik.io/api/groups/123/images"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 3,
      "name": "testfile.jpg",
      "mime": "image/jpeg",
      "size": 35431,
      "type": "image",
      "height": 342,
      "width": 640,
      "extension": "jpg",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/3/1540465893",
      "stream": [],
      "versions": {
        "listing": "https://example.ziik.io/api/file/3/listing/1540465893",
        "detail": "https://example.ziik.io/api/file/3/detail/1540465893",
        "thumbnail": "https://example.ziik.io/api/file/3/thumbnail/1540465893",
        "crop_large": "https://example.ziik.io/api/file/3/cropLarge/1540465893",
        "crop_medium": "https://example.ziik.io/api/file/3/cropMedium/1540465893",
        "crop_small": "https://example.ziik.io/api/file/3/cropSmall/1540465893",
        "chat": "https://example.ziik.io/api/file/3/chat/1540465893"
      },
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    }
  ],
  "links": {
    "first": "/?page=1",
    "last": "/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/groups/1234/images",
    "per_page": 50,
    "to": 3,
    "total": 3
  }
}
```

This endpoints returns a list of files of type image within a given group

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/images`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Group Videos
```bash
curl -i -X GET "https://example.ziik.io/api/groups/123/videos"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 7,
      "name": "testfile.mp4",
      "mime": "video/mp4",
      "size": 4710555,
      "type": "video",
      "extension": "mp4",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/7/1540465893",
      "stream": "https://example.ziik.io/api/file/7/1540465893",
      "versions": [],
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    }
  ],
  "links": {
    "first": "/?page=1",
    "last": "/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/groups/1234/videos",
    "per_page": 50,
    "to": 3,
    "total": 3
  }
}
```

This endpoints returns a list of files of type video within a given group. Videos can be both video files and Youtube or Vimeo urls

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/videos`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Group Documents
```bash
curl -i -X GET "https://example.ziik.io/api/groups/123/documents"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 4,
      "name": "testfile.xlsx",
      "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "size": 5981,
      "type": "application",
      "extension": "xlsx",
      "processing": false,
      "uploaded": true,
      "source": "https://example.ziik.io/api/file/4/1540465893",
      "stream": [],
      "versions": [],
      "screenshot": [],
      "date": 1540465893,
      "created_at": 1540465893,
      "updated_at": 1540465893,
      "created_formatted": "25 October 2018",
      "updated_formatted": "25 October 2018"
    }
  ],
  "links": {
    "first": "/?page=1",
    "last": "/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/groups/1234/documents",
    "per_page": 50,
    "to": 3,
    "total": 3
  }
}
```

This endpoints returns a list of files within a given group that are not either image or video.

### HTTP Request

`GET https://example.ziik.io/api/groups/ID/documents`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the group

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.