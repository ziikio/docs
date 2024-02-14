# Messages

## Create message

```bash
curl -i -X POST "https://example.ziik.io/api/conversations/1234/messages"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"message\": \"This message is for all of you\"}"
```

> The above command returns 201 Created with a location header for where to find the new message

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/messages/1234
{
    "data": {
        "content_type": "message",
        "id": 3,
        "conversationId": 1,
        "type": 1,
        "message": "Dicta ea qui enim labore. Perspiciatis consequatur quia dolorum est quis nihil neque. Quidem qui aspernatur quidem.",
        "date": 1540365820,
        "is_new": true,
        "author": {
          "content_type": "user",
          "id": 6,
          "name": "Stella Donnelly",
          "first_name": "Stella",
          "last_name": "Donnelly",
          "title": "Engine Assembler",
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
          "url": "api/users/6"
        },
        "files": [],
        "uploading_files": 0,
        "url": "api/messages/3"
    }
}
```
This endpoint creates a new message in an existing conversation.

### HTTP Request

`POST https://example.ziik.io/api/conversations/ID/messages`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
message | String | Yes | Message string.
fileCount | Integer | No | Number of files that will be uploaded with subsequent POSTs to /api/messages/ID/files

## Get Conversation Messages

```bash
curl "https://example.ziik.io/api/conversations/2/messages"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "data": [
        {
            "content_type": "message",
            "id": 3,
            "conversationId": 1,
            "type": 1,
            "message": "Dicta ea qui enim labore. Perspiciatis consequatur quia dolorum est quis nihil neque. Quidem qui aspernatur quidem.",
            "date": 1540365820,
            "is_new": true,
            "author": {
              "content_type": "user",
              "id": 6,
              "name": "Stella Donnelly",
              "first_name": "Stella",
              "last_name": "Donnelly",
              "title": "Engine Assembler",
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
              "url": "api/users/6"
            },
            "files": [],
            "uploading_files": 0,
            "url": "api/messages/3"
          }
    ]
}
```

This endpoint retrieves all messages in a specific chat conversation.

### HTTP Request

`GET https://example.ziik.io/api/conversations/ID/messages`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the chat conversation to retrieve messages for

### Query Parameters
Parameter | Type | Default | Description
--------- | ---- | ----- | -----------
page | Integer | 1 | Page number for pagination.
limit | Integer | 500 | Number of records to return per page.
message | Integer | null | Optional ID of a message in the conversation. If given, messages up to this message will be fetched.

## Get Single Message

```bash
curl "https://example.ziik.io/api/conversations/ID/messages/2"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns JSON structured like this:

```json
{
    "data": {
        "content_type": "message",
        "id": 3,
        "conversationId": 1,
        "type": 1,
        "message": "Dicta ea qui enim labore. Perspiciatis consequatur quia dolorum est quis nihil neque. Quidem qui aspernatur quidem.",
        "date": 1540365820,
        "is_new": true,
        "author": {
          "content_type": "user",
          "id": 6,
          "name": "Stella Donnelly",
          "first_name": "Stella",
          "last_name": "Donnelly",
          "title": "Engine Assembler",
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
          "url": "api/users/6"
        },
        "files": [],
        "uploading_files": 0,
        "url": "api/messages/3"
    }
}
```

This endpoint retrieves a specific message.

### HTTP Request

`GET https://example.ziik.io/api/conversations/ID/messages/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the message to retrieve

## Delete a Message

```bash
curl -i -X DELETE "https://example.ziik.io/api/conversations/ID/messages/2"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a specific message for the current user.
The message will still be visible to other participants who have not deleted it, yet.

### HTTP Request

`DELETE https://example.ziik.io/api/conversations/ID/messages/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the message to delete