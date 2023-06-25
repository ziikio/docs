# Participants

Manage conversation participants - only relevant to group-conversations.

::: tip
In the following, "Current user" means the user that has authenticated with the API, identified by the access token.
:::

## Get participants

```bash
curl "https://example.ziik.io/api/chat/2/participants"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "data": [
        {
          "content_type": "user",
          "id": 3,
          "name": "Else Considine",
          "first_name": "Else",
          "last_name": "Considine",
          "title": "Biochemist",
          "avatar": null,
          "active": true,
          "type": 2,
          "unit": {
            "content_type": "unit",
            "id": 1,
            "name": "HQ",
            "level": 0,
            "unit_type": "unit",
            "url": "api/units/1"
          },
          "url": "api/users/3"
        }
    ]
}
```

This endpoint retrieves all participants in a specific chat conversation.

### HTTP Request

`GET https://example.ziik.io/api/chat/ID/participants`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the chat conversation to retrieve participants for

## Add participants

```bash
curl -i -X POST "https://example.ziik.io/api/chat/2/participants"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```
This endpoint adds participants to a given conversation.

### HTTP Request

`POST https://example.ziik.io/api/chat/ID/participants`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | integer | Conversation ID

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
participants | array | Yes | Array of one or more participants IDs.

## Update participant

```bash
curl -i -X PATCH "https://example.ziik.io/api/chat/2/participants/5"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```
This endpoint updates a participant in a given conversation.

### HTTP Request

`PATCH https://example.ziik.io/api/chat/ID/participants/USERID`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
ID | integer | Yes | Conversation ID
USERID | integer | Yes | User ID of user to update


### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
type | integer | Yes | Type of participant - 1 for normal and 2 for admin.

### Permissions Required
- Conversation must be a group-conversation
- Current user must be administrator of conversation

## Remove participant

```bash
curl -i -X DELETE "https://example.ziik.io/api/chat/2/participants/5"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```
This endpoint removes a participant from a given conversation.

### HTTP Request

`DELETE https://example.ziik.io/api/chat/ID/participants/USERID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | integer | Conversation ID
USERID | integer | User ID of user to remove

### Permissions Required
- Conversation must be a group-conversation
- Current user must be administrator of conversation when removing other participants