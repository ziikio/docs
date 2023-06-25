# Feed
The feed is the starting point for the application, giving the user a quick overview of what has happened since last check.

Unlike Facebook, Ziik does not attempt to measure relevance or interest.

::: tip
See the respective content type endpoints for more details as to how they are represented
:::

## Get Feed

```bash
curl "https://example.ziik.io/api/feed"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": [
    {
      "id": 1,
      "content_type": "news",
      "title": "Atque incidunt quod iste consequuntur qui quidem perspiciatis.",
      "body": "<p>Deserunt aut odio aliquid et ut facere. Expedita enim dolorem ut delectus incidunt officia suscipit tempore. Ipsam quos illum enim adipisci eligendi fugit libero eos. Ut sunt veritatis ut reprehenderit ut nemo.</p>",
      "author": {
        "content_type": "user",
        "id": 3,
        "name": "Erna Langworth",
        "first_name": "Erna",
        "last_name": "Langworth",
        "title": "Packaging Machine Operator",
        "avatar": null,
        "active": true,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "physicalUnit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "url": "api/units/1"
        },
        "url": "api/users/3"
      },
      "confirm": {
        "enabled": false,
        "total": 0
      },
      "publish": {
        "status": true,
        "published_at": 1540551819,
        "publish_on": null,
        "unpublish_on": null,
        "created_at": 1540551819,
        "updated_at": 1540551819
      },
      "comments": {
        "count": 0,
        "replies": 0,
        "enabled": true,
        "latest": null
      },
      "interaction": {
        "seen": true,
        "liked": false,
        "read": false,
        "bookmarked": false
      },
      "stats": {
        "comments": 0,
        "replies": 0,
        "likes": 0,
        "reads": 0
      },
      "visibility": {
        "units": [
          {
            "content_type": "unit",
            "id": 1,
            "name": "HQ",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/1"
          }
        ],
        "userTypes": [
          {
            "id": 1,
            "name": "Manager"
          },
          {
            "id": 2,
            "name": "Employee"
          },
          {
            "id": 3,
            "name": "eveniet"
          }
        ]
      },
      "uploading_files": 0,
      "files": [],
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/content/1"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/feed/?page=1",
    "last": "https://example.ziik.io/api/feed/?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/feed",
    "per_page": 50,
    "to": 2,
    "total": 2
  }
}
```

This endpoint retrieves content for the logged in user, ordered by creation time.

### HTTP Request

`GET http://example.ziik.io/api/feed`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | -----------
page | Integer | 1 | Page number to retrieve.
limit | Integer | 50 | How many records to return per page.
types | Array | ['news', 'debate', 'event'] | Filter the feed by type.
unpublished | Integer | 0 | Show only unpublished content. 1 = unpublished, 0 = published.
sortBy | String | activity | Sorting order - 'activity' sorts by latest activity (editing, commenting) on the content, 'publish' sorts by original publish time