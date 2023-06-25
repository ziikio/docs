# Webhook Triggers
A webhook trigger specifies which events should trigger a given webhook. E.g. it could specify that a webhook's URL should be called when a new user is created, updated or deleted.
One webhook can have multiple triggers, all calling the same URL with the data for the event.

## Create Webhook Trigger
```bash
curl -i -X POST "https://example.ziik.io/api/webhooks/123/triggers"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with the webhook data

```http
HTTP/1.0 201 Created
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

This endpoint creates a new webhook trigger.

### HTTP Request

`POST https://example.ziik.io/api/webhooks/ID/triggers`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the webhook

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
event | string | Yes | The event to trigger, e.g. user.create

### Permissions Required

* User must be Administrator

## Get Webhook Triggers
```bash
curl "https://example.ziik.io/api/webhooks/123/triggers"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 1,
      "event": "user.create"
    },
    {
      "id": 2,
      "event": "user.delete"
    }
  ]
}
```

This endpoint retrieves a list of triggers for a webhook.

### HTTP Request

`GET https://example.ziik.io/api/webhooks/ID/triggers`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the webhook

### Permissions Required

* User must be Administrator

## Delete Webhook Trigger

```bash
curl -i -X DELETE "https://example.ziik.io/api/webhooks/123/triggers/234"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a webhook trigger.

### HTTP Request

`DELETE https://example.ziik.io/api/webhooks/WEBHOOKID/triggers/TRIGGERID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
WEBHOOKID | Integer | The ID of the webhook to delete a trigger for
TRIGGERID | Integer | The ID of the trigger to delete

### Permissions Required

* User must be Administrator