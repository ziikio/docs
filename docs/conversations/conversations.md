# Conversations

Any user can contact any other user through the chat, to quickly inform or request information - or just say hi.

::: tip
In the following, "Current user" means the user that has authenticated with the API, identified by the access token.
:::

## Create New Conversation

::: warning
Conversation type is determined upon creation. When only one recipient is added the conversation becomes a "single-conversation" (type = 1) and "group-conversation" (type = 2) when multiple recipients are added.
:::

```bash
curl -i -X POST "https://example.ziik.io/api/chat"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"recipients\": {123, 234, 345}, \"message\": \"This message is for all of you\"}"
```

> The above command returns 201 Created with a Location header for where to find the new message. Additionally, the created message is returned

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/messages/1234
{
    "data": {
        "content_type": "message",
        "id": 3,
        "conversationId": 1,
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

This endpoint creates a new message to a number of recipients from the current user.

### HTTP Request

`POST https://example.ziik.io/api/chat`

### Request Parameters

| Parameter  | Type    | Required | Description                                                                           |
| ---------- | ------- | -------- | ------------------------------------------------------------------------------------- |
| recipients | Array   | Yes      | Array of user IDs to send the message to.                                             |
| message    | String  | Yes      | Message string.                                                                       |
| fileCount  | Integer | No       | Number of files that will be uploaded with subsequent POSTs to /api/messages/ID/files |

## Get Conversations

```bash
curl "https://example.ziik.io/api/chat"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": [
		{
			"id": 1,
			"content_type": "conversation",
			"title": "Sint quaerat ut est laborum.",
			"type": 1,
			"publish": {
				"created_at": 1540365820,
				"updated_at": 1540365820
			},
			"interaction": {
				"seen": true
			},
			"latestMessage": {
				"content_type": "message",
				"id": 3,
				"conversationId": 1,
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
			},
			"participants": [
				{
					"content_type": "user",
					"id": 3,
					"name": "Else Considine",
					"first_name": "Else",
					"last_name": "Considine",
					"title": "Biochemist",
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
					"url": "api/users/3"
				}
			],
			"url": "api/chat/1"
		}
	]
}
```

This endpoint retrieves chat conversations for the current user.

### HTTP Request

`GET https://example.ziik.io/api/chat`

### Query Parameters

| Parameter | Type    | Default | Description                                                                       |
| --------- | ------- | ------: | --------------------------------------------------------------------------------- |
| page      | Integer |       1 | Page number for pagination.                                                       |
| limit     | Integer |      50 | Number of records to return per page.                                             |
| user      | Integer |    null | if provided, only return conversation(s) with that user as only other participant |

## Get Specific Conversation

```bash
curl "https://example.ziik.io/api/chat/2"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": {
		"id": 1,
		"content_type": "conversation",
		"title": "Sint quaerat ut est laborum.",
		"type": 1,
		"publish": {
			"created_at": 1540365820,
			"updated_at": 1540365820
		},
		"interaction": {
			"seen": true
		},
		"latestMessage": {
			"content_type": "message",
			"id": 3,
			"conversationId": 1,
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
		},
		"participants": [
			{
				"content_type": "user",
				"id": 3,
				"name": "Else Considine",
				"first_name": "Else",
				"last_name": "Considine",
				"title": "Biochemist",
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
				"url": "api/users/3"
			}
		],
		"url": "api/chat/1"
	}
}
```

This endpoint retrieves a specific chat conversation.

### HTTP Request

`GET https://example.ziik.io/api/chat/ID`

### URL Parameters

| Parameter | Type    | Description                                 |
| --------- | ------- | ------------------------------------------- |
| id        | Integer | The ID of the chat conversation to retrieve |

## Get Conversation Files

```bash
curl "https://example.ziik.io/api/chat/2/files"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": [
		{
			"id": 1,
			"name": "testfile1.jpg",
			"mime": "video/vimeo",
			"size": 123456,
			"type": "video",
			"extension": "jpg",
			"processing": false,
			"date": 1540451427,
			"source": "https://vimeo.com/181630208",
			"stream": [],
			"versions": [],
			"screenshot": [],
			"created_at": {
				"date": "2018-10-25 07:10:27.000000",
				"timezone_type": 3,
				"timezone": "UTC"
			},
			"updated_at": {
				"date": "2018-10-25 07:10:27.000000",
				"timezone_type": 3,
				"timezone": "UTC"
			},
			"created_formatted": "25 October 2018",
			"updated_formatted": "25 October 2018"
		}
	],
	"links": {
		"first": "https://example.ziik.io/api/chat/1/files?page=1",
		"last": "https://example.ziik.io/api/chat/1/files?page=1",
		"prev": null,
		"next": null
	},
	"meta": {
		"current_page": 1,
		"from": 1,
		"last_page": 1,
		"path": "https://example.ziik.io/api/chat/1/files",
		"per_page": 3,
		"to": 1,
		"total": 1
	}
}
```

This endpoint retrieves files uploaded to any message in a chat conversation.

### HTTP Request

`GET https://example.ziik.io/api/chat/ID/files`

### URL Parameters

| Parameter | Type    | Description                                           |
| --------- | ------- | ----------------------------------------------------- |
| ID        | Integer | The ID of the chat conversation to retrieve files for |

## Mark Conversation Read

```bash
curl -i -X POST "https://example.ziik.io/api/chat/2/seen"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks all messages in a given conversation read by the current user.

### HTTP Request

`POST https://example.ziik.io/api/chat/ID/seen`

### URL Parameters

| Parameter | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| ID        | Integer | The ID of the chat conversation to mark read |

## Update group chat title

```bash
curl -i -X PATCH "https://example.ziik.io/api/chat/2"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an group chat title.

### HTTP Request

`PATCH https://example.ziik.io/api/chat/ID`

| Parameter | Type   | Required | Description          |
| --------- | ------ | -------- | -------------------- |
| title     | String | Yes      | Title for group chat |

## Delete a Conversation

```bash
curl -i -X DELETE "https://example.ziik.io/api/chat/2"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes an entire chat conversation for the current user.
The conversation with all the messages will still be visible to other participants who have not deleted it, yet.

### HTTP Request

`DELETE https://example.ziik.io/api/chat/ID`

### URL Parameters

| Parameter | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| ID        | Integer | The ID of the chat conversation to delete |
