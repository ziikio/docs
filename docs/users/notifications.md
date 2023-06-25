# Notification settings

## Get Notification Settings
```bash
curl "https://example.ziik.io/api/users/current/notifications"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
  {
    "push": {
      "NewsPublished": 1,
      "EventPublished": 1,
      "ShiftAssigned": 1,
      "GroupContent": 1,
      "MessageCreated": 1
    },
    "email": {
      "NewsPublished": 0,
      "EventPublished": 0,
      "ShiftAssigned": 0,
      "GroupContent": 0,
      "MessageCreated": 0
    }
  }
```

This endpoint returns a notification settings for the current user

### HTTP Request

`GET https://example.ziik.io/api/users/current/notifications`

## Update Notification Settings
```bash
curl -i -X PATCH "https://example.ziik.io/api/users/current/notifications"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on success.

```http
HTTP/1.0 204 No Content
```

This endpoint updates a notification setting for the current user.

### HTTP Request

`PATCH https://example.ziik.io/api/users/current/notifications`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
channel | String | Yes | Notification channel - 'push' or 'email'
name | String | Yes | Event triggering notification - "NewsPublished", "EventPublished", "ShiftAssigned", "GroupContent", "MessageCreated"
value | Boolean | Yes | Whether to send notifications for this channel and name
