# Counters

## Get Counters

```bash
curl "https://example.ziik.io/api/counters"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "groups": 1,
    "events": 3,
    "news": 2,
    "messages": 1
}
```

This endpoint returns the number of unseen group debates, events, news stories and private messages.

## Get Counter For A Content Type

```bash
curl "https://example.ziik.io/api/counters/debate"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns a simple integer:

```
1
```

This endpoint returns the count of unseen group debates, events, news stories or private messages.

### HTTP Request

`GET https://example.ziik.io/api/counters/TYPE`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
type | string | key for content type - can be 'debate', 'event', 'news' or 'message'

## Get Unseen Content

```bash
curl "https://example.ziik.io/api/counters/groups/unseen"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
[
    {
      "id":124,
      "content_type":"debate",
      "body": "This is the debate text",
      "publish": {
          "published_at" : 1234567890,
          "created_at"   : 1234567890,
          "updated_at"   : 1234567890,
      },
      "comments": {
          "count"   : 5,
          "replies" : 4,
          "enabled" : true,
          "url" : "api/debates/124/comments",
      },
      "group": {
          "id" : 123,
          "name" : "Test Group",
          'image' : null,
      },
      "uploading_files": 0,
      "permissions":{
          "edit": false,
          "edit_until": 1234567890,
          "delete": false,
      },
      "url":"api/debates/124",
    }
]
```

This endpoint returns the unseen group debates, events, news stories or private messages.

### HTTP Request

`GET https://example.ziik.io/api/counters/TYPE/unseen`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
type | string | key for content type - can be 'debate', 'events', 'news' or 'messages'

## Clear Unseen Content By Type

```bash
curl -i -X DELETE "https://example.ziik.io/api/counters/debate"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint clears the count of unseen group debates, events, news stories or private messages.

### HTTP Request

`DELETE https://example.ziik.io/api/counters/TYPE`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
type | string | key for content type - can be 'debate', 'event', 'news' or 'message'