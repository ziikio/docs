# Alerts
Alerts are informational messages from Ziik to all users

## Get Alerts

```bash
curl "https://example.ziik.io/api/alerts"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "data": {
      [
        {
          "id": 123,
          "message": "This is a test alert",
          "type": "info", // "info", "warning" or "danger"
          "start": 1234567890,
          "end": 1234567899,
          "permissions": {
            "manage": false,
          }
        }
      ]
    }
}
```

This endpoint returns alerts active at the time of the request.