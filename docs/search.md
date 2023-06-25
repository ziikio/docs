# Search

Searches are free text searches across content that can be limited to only content of one or more types. 

## Perform Search

```bash
curl "https://example.ziik.io/api/search/[Keyword]"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured similar to /feed:

```json
{
  "data": [
    {
      "id": 2,
      "content_type": "news",
      "title": "A title containing phrase inside it",
      "body": "<p>Ad rerum possimus aut cumque. Occaecati possimus qui reprehenderit. Eaque vero voluptatem sit laborum enim impedit ea omnis.</p>",
      "confirm": {
        "enabled": false,
        "total": 0
      },
      "publish": {
        "status": true,
        "published_at": "2018-10-28 09:24:13",
        "publish_on": null,
        "unpublish_on": null,
        "created_at": 1540814147,
        "updated_at": 1540814147
      },
      "comments": {
        "enabled": true
      },
      "stats": [],
      "visibility": [],
      "uploading_files": 0,
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/content/2"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/search?query=phrase&page=1",
    "last": "https://example.ziik.io/api/search?query=phrase&page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/search",
    "per_page": 20,
    "to": 2,
    "total": 2,
    "facets": {
      "news": 2
    }
  }
}
```

Perform a search with the provided keyword.

### HTTP Request

`GET https://example.ziik.io/api/search/KEYWORD`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
KEYWORD | String | Search keyword(s)

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.
type | Array | NULL | Any number of content types to search in. Valid values are 'news', 'manuals', 'user', 'unit', 'faq', 'supplier', 'debate', 'event', 'document', 'message'