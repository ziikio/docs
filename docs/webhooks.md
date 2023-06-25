# Webhooks
Webhooks are user-defined HTTP callbacks that are triggered by changes in the system.

To put it differently, a webhook is a URL that Ziik will call when certain events happen in Ziik.

## Create webhook
```bash
curl -i -X POST "https://example.ziik.io/api/webhooks"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created webhook

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/webhooks/1234
{
  "data": {
    "id": 1,
    "content_type": "webhook",
    "name": "ea veniam iure",
    "uri": "http://example.com/ziik-user",
    "author": {
      "content_type": "user",
      "id": 3,
      "name": "Jean Waters",
      "first_name": "Jean",
      "last_name": "Waters",
      "title": "Power Distributors OR Dispatcher",
      "active": true,
      "permissions": {
        "edit": true,
        "delete": false
      },
      "avatar": null,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent_id": null,
        "stats": [],
        "url": "api/units/1"
      },
      "physicalUnit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent_id": null,
        "stats": [],
        "url": "api/units/1"
      },
      "url": "api/users/3"
    },
    "permissions": {
      "edit": true,
      "delete": true
    },
    "url": "api/webhooks/1"
  }
}

```

This endpoint creates a new webhook.

### HTTP Request

`POST https://example.ziik.io/api/webhooks`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | string | Yes | A name for the webhook to identify it to the user
uri | URL | Yes | The URL that should be called
triggers | Array | No | Array of events that should trigger a webhook call 

::: tip
Supported values for triggers are:
* user.create
* user.update
* user.delete
* unit.create
* unit.update
* unit.delete
:::

### Permissions Required

* User must be Administrator

## Get Webhooks
```bash
curl "https://example.ziik.io/api/webhooks"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 1,
      "content_type": "webhook",
      "name": "ea veniam iure",
      "uri": "http://example.com/ziik-user",
      "author": {
        "content_type": "user",
        "id": 3,
        "name": "Jean Waters",
        "first_name": "Jean",
        "last_name": "Waters",
        "title": "Power Distributors OR Dispatcher",
        "active": true,
        "permissions": {
          "edit": true,
          "delete": false
        },
        "avatar": null,
        "unit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "parent_id": null,
          "stats": [],
          "url": "api/units/1"
        },
        "physicalUnit": {
          "content_type": "unit",
          "id": 1,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "parent_id": null,
          "stats": [],
          "url": "api/units/1"
        },
        "url": "api/users/3"
      },
      "permissions": {
        "edit": true,
        "delete": true
      },
      "url": "api/webhooks/1"
    }
  ]
}
```

This endpoint retrieves a list of webhooks.

### HTTP Request

`GET https://example.ziik.io/api/webhooks`

### Query Parameters

* None

### Permissions Required

* User must be Administrator

## Get Single Webhook

```bash
curl "https://example.ziik.io/api/webhooks/822"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "webhook",
    "name": "ea veniam iure",
    "uri": "http://example.com/ziik-user",
    "author": {
      "content_type": "user",
      "id": 3,
      "name": "Jean Waters",
      "first_name": "Jean",
      "last_name": "Waters",
      "title": "Power Distributors OR Dispatcher",
      "active": true,
      "permissions": {
        "edit": true,
        "delete": false
      },
      "avatar": null,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent_id": null,
        "stats": [],
        "url": "api/units/1"
      },
      "physicalUnit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "level": 0,
        "unit_type": "unit",
        "parent_id": null,
        "stats": [],
        "url": "api/units/1"
      },
      "url": "api/users/3"
    },
    "permissions": {
      "edit": true,
      "delete": true
    },
    "url": "api/webhooks/1"
  }
}
```

This endpoint returns a single webhook

### HTTP Request

`GET https://example.ziik.io/api/webhooks/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the webhook

### Permissions Required

* User must be Administrator

## Edit Webhook

```bash
curl -i -X PATCH "https://example.ziik.io/api/webhook/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing webhook.

### HTTP Request

`PATCH https://example.ziik.io/api/webhooks/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | string | No | A name for the webhook to identify it to the user
uri | URL | No | The URL that should be called

### Permissions Required

* User must be Administrator

## Delete Webhook

```bash
curl -i -X DELETE "https://example.ziik.io/api/webhooks/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a webhook.

### HTTP Request

`DELETE https://example.ziik.io/api/webhooks/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the webhook to delete

### Permissions Required

* User must be Administrator