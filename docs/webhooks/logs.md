# Webhook Logs
Whenever a webhook is triggered, the result of the call is logged.

## Get Webhook Logs
```bash
curl "https://example.ziik.io/api/webhooks/123/logs"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 1,
      "event": "user.create",
      "uri": "http://receiver.example.com/explicabo-reiciendis-labore-non-dolores",
      "status": "200"
    }
  ],
  "links": {
    "first": "https://example.com/api/webhooks/1/logs?page=1",
    "last": "https://example.com/api/webhooks/1/logs?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.com/api/webhooks/1/logs",
    "per_page": 20,
    "to": 1,
    "total": 1
  }
}
```

This endpoint retrieves a list of log entries for a webhook.

### HTTP Request

`GET https://example.ziik.io/api/webhooks/ID/logs`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the webhook

### Permissions Required

* User must be Administrator