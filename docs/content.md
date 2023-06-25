# Content

Content is a generic type of posts - they can be shared with users in the organisation or in a group

## Create Content

```bash
curl -i -X POST "https://example.ziik.io/api/content"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created content

```json
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/content/1234
{
  "data": {
    "id": 1,
    "content_type": "event",
    "type": "chain",
    "title": "Some event with multiple units",
    "body": "This is a body",
    "show_in_feed": true,
    "event": {
        "location": null,
        "link": null,
        "all_day": false,
        "datetime_start": "2022-10-28T10:00:00Z",
        "datetime_end": "2022-10-28T12:00:00Z"
        "recurrence": null,
        "rrule": null,
        "participation": {
          "enabled": false,
          "rsvp": null,
          "invited": 1,
          "accepted": 0,
          "rejected": 0
        },
    },
    "publish": {
      "published_at": 1540460232,
      "created_at": 1540460232,
      "updated_at": 1540460232
    },
    "comments": {
      "enabled": true
    },
    "interaction": {
      "seen": true
    },
    "stats": [],
    "sharing": {
       "shares": []
    },
    "visibility": {
      "units": [
        {
          "content_type": "unit",
          "id": 2,
          "name": "Beier-Hermiston",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/2"
        },
        {
          "content_type": "unit",
          "id": 3,
          "name": "Bogisich and Sons",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/3"
        },
        {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/1"
        },
        {
          "content_type": "unit",
          "id": 4,
          "name": "Pouros Group",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/4"
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
        }
      ]
    },
    "uploading_files": 0,
    "permissions": {
      "edit": true,
      "delete": true
    },
    "url": "api/content/1"
  }
}
```

This endpoint creates a new content post.

Adding a recurrent event to content can be a complex task. See this page for more info: <https://www.textmagic.com/free-tools/rrule-generator>.

### HTTP Request

`POST https://example.ziik.io/api/content`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | Yes | Title for the content.
body | String | No | Description for the content.
group | Integer | No | ID of group to share with
event | Array | No | Array of event data with the following properties
- location | String | No | Freetext describing the location of the event
- link | String | No | Full URL including protocol - e.g. https://example.com
- datetime_start | String | Yes | Event start in ISO-8601 format.
- datetime_end | String | Yes | Event end in ISO-8601 format.
- all_day | Boolean | No | Whether event is all day
- recurrence | Array | No | An array of recurrence rules, in RRULE format.
- - freq | String | Yes | Valid values are: daily, weekly, monthly, yearly.
- - until | Date | No | Repeat event until this date in the format "YYYY-MM-DD".
- - count | Integer | No | Repeat X times.
- - interval | Integer | No | Repeat every X day/week/month/year.
- - byday | String or Array | No | By day. One or more of values: MO,TU,WE,TH,FR,SA,SU. For weekdays use MO+TU+WE+TH+FR. For weekends use SA+SU.
- - bymonthday | String | No | By day of the month. Values: 1-31.
- - bymonth | String | No | By month. Values: 1-12
- - bysetpos | String | No | By the X of Y of month. Values: 1-5. Used in conjunction with "byday". For last day use -1.
visibility | Array | No | When publishing to units and user types, they should come in this array
- units | Array | No | Units this content should be published to
- units_falldown | Array | No | Units this content should be published to along with their sub-units
- userTypes | Array | No | User type IDs of the user types to publish to
confirm | Array | No | Settings for read confirmation
- enabled | Boolean | No | If true, content is marked as requiring read confirmation from readers
comments | Array | No | Settings for comments enabled/disabled
- enabled | Boolean | No | If true, content is open for comments
important | Boolean | No | Whether the content is 'important' and should be highlighted
publish | Array | No | content publishing options:
- publish_on | Integer or null | No | Unix timestamp for content publishing time - null means not published, setting a timestamp at or before the current time publishes immediately.
- unpublish_on | Integer or null | No | Unix timestamp for when the content should be unpublished - null means content will not be unpublished
fileCount | Integer | No | Number of files that will be uploaded. If a publish time is set, publishing will wait until files have been uploaded
owner_unit | Integer | No | ID of the unit, the user is writing from - applicable when the user is in multiple units with create permission
sharing | Array | No | Array with the following keys if applicable
- shares | Array | No | User IDs of users this content is shared with

### Permissions Required

* Write permission to news if shared with organisation
* Write permission to events if shared with organisation and containing an event
* Membership of the group if shared with a group

## Get Content
```bash
curl "https://example.ziik.io/api/content"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 5,
      "content_type": "event",
      "type": "chain",
      "title": "Fuga eveniet nulla a soluta.",
      "body": "Magni nostrum eaque qui rerum cumque. Est sit fugiat sapiente. Delectus voluptas voluptatem minima exercitationem reprehenderit ullam culpa. Facilis debitis nihil dolores reiciendis.",
      "show_in_feed": true,
      "event": {
          "location": "Rathtown",
          "link": "http://leuschke.com/",
          "all_day": false,
          "date_start": null,
          "date_end": null,
          "recurrence": null,
          "rrule": null,
          "dates": [
            {
              "start": "1540598400",
              "end": "1540602000"
            }
          ],
          "participation": {
            "enabled": false
          }
      },
      "author": {
        "content_type": "user",
        "id": 7,
        "name": "Cali Rutherford",
        "first_name": "Cali",
        "last_name": "Rutherford",
        "title": "Machine Feeder",
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
        "url": "api/users/7"
      },
      "publish": {
        "published_at": 1540460330,
        "created_at": 1540460330,
        "updated_at": 1540460330
      },
      "comments": {
        "enabled": true
      },
      "interaction": {
        "seen": true
      },
      "stats": [],
      "sharing": {
        "shared": false,
        "shares": []
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
          }
        ],
      },
      "uploading_files": 0,
      "files": [],
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/content/5"
    },
    {
      "id": 6,
      "content_type": "event",
      "type": "chain",
      "title": "Dolorem ipsum architecto eos est error vel.",
      "body": "Voluptatem magni esse nemo impedit distinctio ullam hic. Eum odit dolores saepe illo. Repudiandae ullam explicabo nihil nisi nemo.",
      "show_in_feed": true,
      "event": {
          "location": "Port Maybellchester",
          "link": "http://www.koch.com/est-quis-repellat-maxime-repudiandae-ex-voluptates.html",
          "all_day": false,
          "date_start": null,
          "date_end": null,
          "recurrence": null,
          "rrule": null,
          "dates": [
            {
              "start": "1540598400",
              "end": "1540602000"
            }
          ],
          "participation": {
            "enabled": false
          }
      },
      "author": {
        "content_type": "user",
        "id": 8,
        "name": "Ariane Larson",
        "first_name": "Ariane",
        "last_name": "Larson",
        "title": "HR Manager",
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
        "url": "api/users/8"
      },
      "publish": {
        "published_at": 1540460330,
        "created_at": 1540460330,
        "updated_at": 1540460330
      },
      "comments": {
        "enabled": true
      },
      "interaction": {
        "seen": true
      },
      "stats": [],
      "sharing": {
        "shared": false,
        "shares": []
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
          }
        ],
      },
      "uploading_files": 0,
      "files": [],
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/content/6"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/content?page=1",
    "last": "https://example.ziik.io/api/content?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/content",
    "per_page": 500,
    "to": 2,
    "total": 2
  }
}
```

This endpoint retrieves a list of content.

### HTTP Request

`GET https://example.ziik.io/api/content`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
content_type | String | NULL | If set, only show content with this type - can be 'news', 'debate' or 'event'
group | Integer | NULL | If set, only fetch content from the group with this ID
page | Integer | 1 | Page number for pagination.
limit | Integer | 5 | Number of records to return per page.
filter | String or Array | NULL | Filter(s) to apply, valid options are 'feed', 'bookmark', 'important' and 'confirm'
type | String | NULL | If set to drafts, only unpublished content is displayed
scheduled | Boolean (0 or 1) | NULL | If 1 fetch only scheduled content. If 0 fetch only non-scheduled content. If no value, fetch both
answered | Presence | NULL | If the parameter is set - regardless of the value - fetch only content with confirm read or participation that the user has reacted to
author | Integer | NULL | If present in the request, but without a value (null or 0 or ''), fetch only content authored by the current user. If an integer, fetch content from the user with this ID
sortBy | String | activity | Sorting order - 'activity' sorts by latest activity (editing, commenting) on the content, 'publish' sorts by original publish time

## Get Single Content

```bash
curl "https://example.ziik.io/api/content/1203"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
      "id": 6,
      "content_type": "event",
      "type": "chain",
      "title": "Dolorem ipsum architecto eos est error vel.",
      "body": "Voluptatem magni esse nemo impedit distinctio ullam hic. Eum odit dolores saepe illo. Repudiandae ullam explicabo nihil nisi nemo.",
      "show_in_feed": true,
      "event": {
          "location": "Port Maybellchester",
          "link": "http://www.koch.com/est-quis-repellat-maxime-repudiandae-ex-voluptates.html",
          "all_day": false,
          "date_start": null,
          "date_end": null,
          "recurrence": null,
          "rrule": null,
          "dates": [
            {
              "start": "1540598400",
              "end": "1540602000"
            }
          ],
          "participation": {
            "enabled": false
          }
      },
      "author": {
        "content_type": "user",
        "id": 8,
        "name": "Ariane Larson",
        "first_name": "Ariane",
        "last_name": "Larson",
        "title": "HR Manager",
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
        "url": "api/users/8"
      },
      "publish": {
        "published_at": 1540460330,
        "created_at": 1540460330,
        "updated_at": 1540460330
      },
      "comments": {
        "count": 2,
        "enabled": true,
        "latest": null,
        "replies": 3
      },
      "interaction": {
        "seen": true
      },
      "stats": {
        "comments": 2,
        "replies": 3
      },
      "sharing": {
        "shared": false,
        "shares": []
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
          }
        ],
      },
      "uploading_files": 0,
      "files": [],
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/content/6"
  }
}
```

This endpoint returns a single content post

### HTTP Request

`GET https://example.ziik.io/api/content/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content

### Permissions Required

* Current user's user type in content's user types
* AND Current user's unit(s) within the content's units
* OR Content is shared with units and/or users and authored by the current user
* OR Content is shared with the current user
* OR Content is shared in a group, the current user is a member of

## Edit Content

```bash
curl -i -X PATCH "https://example.ziik.io/api/content/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on a successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing content.

### HTTP Request

`PATCH https://example.ziik.io/api/content/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
title | String | No | Title for the content.
body | String | No | Description for the content.
event | Array | No | Array of event data with the following properties
- location | String | No | Freetext describing the location of the event
- link | String | No | Full URL including protocol - e.g. https://example.com
- start | Integer | No | Unix Timestamp of event start time
- end | Integer | No | Unix Timestamp of event end time
- all_day | Integer | No | 1 = true, 0 = false. When set to "1", date must also be provided and start + end are ignored
- date | Date | If all_day = 1 | A date in the format "YYYY-MM-DD"
- recurrence | Array | No | An array of recurrence rules, in RRULE format.
- - freq | String | Yes | Valid values are: daily, weekly, monthly, yearly.
- - until | Date | No | Repeat event until this date in the format "YYYY-MM-DD".
- - count | Integer | No | Repeat X times.
- - interval | Integer | No | Repeat every X day/week/month/year.
- - byday | String or Array | No | By day. One or more of values: MO,TU,WE,TH,FR,SA,SU. For weekdays use MO+TU+WE+TH+FR. For weekends use SA+SU.
- - bymonthday | String | No | By day of the month. Values: 1-31.
- - bymonth | String | No | By month. Values: 1-12
- - bysetpos | String | No | By the X of Y of month. Values: 1-5. Used in conjunction with "byday". For last day use -1.
visibility | Array | No | When publishing to units and user types, they should come in this array
- units | Array | No | Units this content should be published to
- units_falldown | Array | No | Units this content should be published to along with their sub-units
- userTypes | Array | No | User type IDs of the user types to publish to
confirm | Array | No | Settings for read confirmation
- enabled | Boolean | No | If true, content is marked as requiring read confirmation from readers
comments | Array | No | Settings for comments enabled/disabled
- enabled | Boolean | No | If true, content is open for comments
important | Boolean | No | Whether the content is 'important' and should be highlighted
publish | Array | No | content publishing options:
- publish_on | Integer or null | No | Unix timestamp for content publishing time - null means not published, setting a timestamp at or before the current time publishes immediately.
- unpublish_on | Integer or null | No | Unix timestamp for when the content should be unpublished - null means content will not be unpublished
fileCount | Integer | No | Number of files that will be uploaded. If a publish time is set, publishing will wait until files have been uploaded
sharing | Array | No | Array with the following keys if applicable
- shares | Array | No | User IDs of users this content is shared with

### NOTE!
Once content is published in a group, it can no longer be changed.
Content published in the organisation cannot be changed to be published in a group. However, units, usertypes and users can still be changed.

### Permissions Required

* Administer permission to news if the content does not have an event
* Administer permission to events if the content has an event
* AND Content is shared with units/users
* AND Content shared from the current user's unit
* OR administrator of the group, the content is shared with

## Delete Content

```bash
curl -i -X DELETE "https://example.ziik.io/api/content/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a content post.

### HTTP Request

`DELETE https://example.ziik.io/api/content/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content to delete

### Permissions Required

* Administer permission to news if the content does not have an event
* Administer permission to events if the content has an event
* AND Content is shared with units/users
* AND Content shared from the current user's unit
* OR administrator of the group, the content is shared with

## Republish Content

```bash
curl -i -X POST "https://example.ziik.io/api/content/123/republish"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint republishes a content post. This means that the content is added to counters,
notifications are resent, and the update time of the content is set, moving the content to the top of feeds

### HTTP Request

`POST https://example.ziik.io/api/content/ID/republish`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the content to republish

### Permissions Required

* Edit permissions to the content
* AND content must be published