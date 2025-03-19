# Folders

## Create New Folder

```bash
curl -i -X POST "https://example.ziik.io/api/folders"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"name\": \"A New Folder\", \"parent\": 121, \"units\": [565], \"userTypes\": {"access": [345], "manage": [567]}"
```

> The above command returns 201 Created with a location header for where to find the new folder

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/folders/1234
{
  "data": {
    "id": 122,
    "content_type": "folder",
    "name": "New Folder",
    "parent": 121,
    "root": 1,
    "publish": {
      "created_at": 1540457800,
      "updated_at": 1540457800
    },
    "sharing": {
      "shared": false,
      "shares": [],
      "inheritedShares": []
    },
    "visibility": {
      "units": [
        {
          "content_type": "unit",
          "id": 565,
          "name": "HQ",
          "level": 0,
          "unit_type": "unit",
          "falldown": false,
          "url": "api/units/1"
        }
      ],
      "userTypes": [
        {
          "id": 567,
          "name": "Manager",
          "rights": "manage"
        },
        {
          "id": 345,
          "name": "Employee",
          "rights": "access"
        }
      ]
    },
    "permissions": {
      "edit": true,
      "delete": true,
      "add": true
    },
    "url": "api/folders/1"
  }
}
```

This endpoint creates a new folder.

### HTTP Request

`POST https://example.ziik.io/api/folders`

### Request Parameters

| Parameter       | Type    | Required | Description                                                              |
| --------------- | ------- | -------- | ------------------------------------------------------------------------ |
| name            | String  | Yes      | Name of the new folder.                                                  |
| parent          | Integer | Yes      | Parent folder of the new folder.                                         |
| visibility      | Array   | No       | Array of the following values if applicable                              |
| -units          | Array   | No       | Array of unit IDs to assign to the new folder if it is to be shared      |
| -units_falldown | Array   | No       | Array of unit IDs to assign to the new folder with falldown to sub-units |
| - userTypes     | Array   | No       | Not used for personal folders. Array with the following parameters       |
| -- read         | Array   | No       | user type IDs to allow read access to the new folder                     |
| -- write        | Array   | No       | user type IDs to allow write access to the new folder                    |
| -- manage       | Array   | No       | user type IDs to allow manage access of the new folder                   |
| sharing         | Array   | No       | Array of the following, if applicable                                    |
| -shares         | Array   | No       | Shares with users                                                        |
| -- read         | Array   | No       | user IDs to allow shared read access                                     |
| -- write        | Array   | No       | user IDs to allow shared access with write permissions                   |
| -- manage       | Array   | No       | user IDs to allow shared access with manage permissions                  |

### Permissions Required

-   Access to parent folder

## Get Folders

```bash
curl "https://example.ziik.io/api/folders"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": [
		{
			"id": 3,
			"content_type": "folder",
			"name": "aperiam",
			"parent": null,
			"root": 3,
			"owner": {
				"content_type": "user",
				"id": 5,
				"name": "Vernice Wilderman",
				"first_name": "Vernice",
				"last_name": "Wilderman",
				"title": "Order Clerk",
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
				"url": "api/users/5"
			},
			"publish": {
				"created_at": 1540458166,
				"updated_at": 1540458166
			},
			"sharing": {
				"shared": false,
				"shares": [],
				"inheritedShares": []
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
						"name": "Manager",
						"rights": "manage"
					},
					{
						"id": 2,
						"name": "Employee",
						"rights": "manage"
					}
				]
			},
			"permissions": {
				"edit": true,
				"delete": true,
				"add": true
			},
			"url": "api/folders/3"
		},
		{
			"id": 8,
			"content_type": "folder",
			"name": "blanditiis",
			"parent": null,
			"root": 8,
			"owner": {
				"content_type": "user",
				"id": 2,
				"name": "Gardner Osinski",
				"first_name": "Gardner",
				"last_name": "Osinski",
				"title": "Driver-Sales Worker",
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
				"url": "api/users/2"
			},
			"publish": {
				"created_at": 1540458166,
				"updated_at": 1540458166
			},
			"sharing": {
				"shared": false,
				"shares": [],
				"inheritedShares": []
			},
			"visibility": {
				"units": [],
				"userTypes": []
			},
			"permissions": {
				"edit": true,
				"delete": true,
				"add": true
			},
			"url": "api/folders/8"
		}
	],
	"links": {
		"first": "https://example.ziik.io/api/folders?page=1",
		"last": "https://example.ziik.io/api/folders?page=1",
		"prev": null,
		"next": null
	},
	"meta": {
		"current_page": 1,
		"from": 1,
		"last_page": 1,
		"path": "https://example.ziik.io/api/folders",
		"per_page": 50,
		"to": 2,
		"total": 2
	}
}
```

This endpoint retrieves a list of folders.

If a parent ID is supplied, sub-folders to that folder are returned.

If no parent ID is supplied, root folders are returned, without folders shared directly with the current user.

If sharesOnly parameter is set, only folders shared directly with the user (i.e. not through units and user types) will be returned.

Folders are restricted by user types and units.

### HTTP Request

`GET https://example.ziik.io/api/folders`

### Query Parameters

| Parameter  | Type    | Default | Description                                            |
| ---------- | ------- | ------: | ------------------------------------------------------ |
| parent     | Integer |       0 | ID of the parent folder to fetch folders for           |
| page       | Integer |       1 | Page number for pagination.                            |
| limit      | Integer |     500 | Number of records to return per page.                  |
| sharesOnly | Boolean |   false | Whether to return folders shared with the current user |

## Get Folder Hierarchy

```bash
curl "https://example.ziik.io/api/folders/tree"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": [
		{
			"id": 1,
			"content_type": "folder",
			"name": "eos",
			"parent": null,
			"root": 1,
			"owner": {
				"content_type": "user",
				"id": 3,
				"name": "Jasmin Kilback",
				"first_name": "Jasmin",
				"last_name": "Kilback",
				"title": "Physician",
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
			},
			"publish": {
				"created_at": 1540458306,
				"updated_at": 1540458306
			},
			"sharing": {
				"shared": false,
				"shares": [],
				"inheritedShares": []
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
						"name": "Manager",
						"rights": "manage"
					},
					{
						"id": 2,
						"name": "Employee",
						"rights": "manage"
					}
				]
			},
			"children": [
				{
					"id": 3,
					"content_type": "folder",
					"name": "deserunt",
					"parent": 1,
					"root": 1,
					"publish": {
						"created_at": 1540458306,
						"updated_at": 1540458306
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
						]
					},
					"children": [],
					"permissions": {
						"edit": true,
						"delete": true,
						"add": true
					},
					"url": "api/folders/3"
				}
			],
			"permissions": {
				"edit": true,
				"delete": true,
				"add": true
			},
			"url": "api/folders/1"
		}
	]
}
```

This endpoint retrieves a list of folders with their children (sub-folders).

If a folder ID is supplied in the root parameter, only that folder and its sub-folders are returned.

If a folder ID is supplied in the exclude parameter, that folder and its sub-folders are NOT returned.

### HTTP Request

`GET https://example.ziik.io/api/folders/tree`

### Query Parameters

| Parameter | Type    | Default | Description                                                        |
| --------- | ------- | ------: | ------------------------------------------------------------------ |
| root      | Integer |       0 | ID of the folder to set as root of the returned hierarchy.         |
| exclude   | Integer |       0 | ID of a folder to exclude from the result along with its children. |

## Get Folder Parents

```bash
curl "https://example.ziik.io/api/folders/123/parents"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": [
		{
			"id": 1,
			"content_type": "folder",
			"name": "repellendus",
			"parent": 0,
			"root": 1,
			"owner": {
				"content_type": "user",
				"id": 3,
				"name": "Junius Glover",
				"first_name": "Junius",
				"last_name": "Glover",
				"title": "Loan Interviewer",
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
			},
			"publish": {
				"created_at": 1540458503,
				"updated_at": 1540458503
			},
			"sharing": {
				"shared": false,
				"shares": [],
				"inheritedShares": []
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
						"name": "Manager",
						"rights": "manage"
					},
					{
						"id": 2,
						"name": "Employee",
						"rights": "manage"
					}
				]
			},
			"permissions": {
				"edit": true,
				"delete": true,
				"add": true
			},
			"url": "api/folders/1"
		},
		{
			"id": 2,
			"content_type": "folder",
			"name": "aliquam",
			"parent": 1,
			"root": 1,
			"owner": {
				"content_type": "user",
				"id": 4,
				"name": "Maggie Doyle",
				"first_name": "Maggie",
				"last_name": "Doyle",
				"title": "Textile Machine Operator",
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
				"url": "api/users/4"
			},
			"publish": {
				"created_at": 1540458503,
				"updated_at": 1540458503
			},
			"sharing": {
				"shared": false,
				"shares": [],
				"inheritedShares": []
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
						"name": "Manager",
						"rights": "manage"
					},
					{
						"id": 2,
						"name": "Employee",
						"rights": "manage"
					}
				]
			},
			"permissions": {
				"edit": true,
				"delete": true,
				"add": true
			},
			"url": "api/folders/2"
		}
	]
}
```

This endpoint retrieves a list of folders that are parent or parent's parent to the chosen folder.

### HTTP Request

`GET https://example.ziik.io/api/folders/ID/parents`

### URL Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| id        | Integer | ID of the folder to get parents for |

## Get Single Folder

```bash
curl "https://example.ziik.io/api/folders/121"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
	"data": {
		"id": 1,
		"content_type": "folder",
		"name": "incidunt",
		"parent": 0,
		"root": 1,
		"owner": {
			"content_type": "user",
			"id": 3,
			"name": "Abdullah Schneider",
			"first_name": "Abdullah",
			"last_name": "Schneider",
			"title": "Medical Secretary",
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
		},
		"publish": {
			"created_at": 1540458599,
			"updated_at": 1540458599
		},
		"sharing": {
			"shared": false,
			"shares": [],
			"inheritedShares": []
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
					"name": "Manager",
					"rights": "manage"
				},
				{
					"id": 2,
					"name": "Employee",
					"rights": "manage"
				}
			]
		},
		"permissions": {
			"edit": true,
			"delete": true,
			"add": true
		},
		"url": "api/folders/1"
	}
}
```

This endpoint returns a single folder by its ID.

### HTTP Request

`GET https://example.ziik.io/api/folders/ID`

### URL Parameters

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| ID        | Integer | The ID of the folder to retrieve` |

### Permissions Required

-   Access to folder - Either as owner, through units and usertypes or by direct sharing.

## Edit Existing Folder

```bash
curl -i -X PATCH "https://example.ziik.io/api/folders/121"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"name\": \"A New Name\"}"
```

> The above command returns 204 No Content on successful folder update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing folder.

### HTTP Request

`PATCH https://example.ziik.io/api/folders/ID`

### Request Parameters

| Parameter        | Type   | Required | Description                                                              |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------ |
| name             | String | No       | New name of the folder.                                                  |
| visibility       | Array  | No       | Array of the following values if applicable                              |
| - units          | Array  | No       | Array of unit IDs to assign to the new folder if it is to be shared      |
| - units_falldown | Array  | No       | Array of unit IDs to assign to the new folder with falldown to sub-units |
| - userTypes      | Array  | No       | Not used for personal folders. Array with the following parameters       |
| -- read          | Array  | No       | user type IDs to allow read access to the new folder                     |
| -- write         | Array  | No       | user type IDs to allow write access to the new folder                    |
| -- manage        | Array  | No       | user type IDs to allow manage access of the new folder                   |
| sharing          | Array  | No       | Array of the following, if applicable                                    |
| - shares         | Array  | No       | Shares with users                                                        |
| -- read          | Array  | No       | user IDs to allow shared read access                                     |
| -- write         | Array  | No       | user IDs to allow shared access with write permissions                   |
| -- manage        | Array  | No       | user IDs to allow shared access with manage permissions                  |

### Permissions Required

-   Manage permission to folder

## Delete a Folder

```bash
curl -i -X DELETE "https://example.ziik.io/api/folders/122"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a folder.

### HTTP Request

`DELETE https://example.ziik.io/api/folders/ID`

### URL Parameters

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| ID        | Integer | The ID of the folder to delete |

### Permissions Required

* Manage access to folder
* OR creator of folder


## Upload a file to a folder

To upload a file to a folder a series of endpoints must be called in a specific order.

- We make a request to our upload endpoint to generate the pre-signed URL.

```bash
curl -i -X POST "https://example.ziik.io/api/upload"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{\"content_type\": \"video/mp4\", \"filename\": \"video.mp4\, \"id\": {folderId}\",  \"type\": \"folders\}"
```

> The above command returns JSON structured like this:

```json
{
    "uuid": "f5b0841e-801d-4b3a-bbf7-edd346d5eb2d",
    "bucket": "ziik-application",
    "key": "f5b0841e-801d-4b3a-bbf7-edd346d5eb2d",
    "url": "https://ziik-application.s3.eu-central-1.amazonaws.com/your-folder/f5b0841e-801d-4b3a-bbf7-edd346d5eb2d?x-amz-acl=private&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaDGV1LWNlbnRyYWwtMSJGMEQCIA7wXbuh%2BfryA8PdprvQVm4fJaoqow3nSe4XIogeg7jvAiAaJGbLrTScWLNLeDfgeIuxOloYH3gw8RRwYzvjmUXYAiqOAwhgEAIaDDc3ODIwNjE2NTQyNiIM7WQz%2FgSuB5WUug7QKusClPGhywYId%2FgRUhn48HCiOgpoLW6mtY44L%2FlRGphhvrVuqHL%2FYlKVOYI4HhG2RcolpNBg6ySIU07sB5Z6L0Q5wRhebhLVB2raWU1bP%2B6yqwD0bLlTv2%2F5Cg57NotKsjO3%2FCNmo5zBdYxwzMXDcbb0z%2BnSQTCcbaGzDft5f2aHnX02J9QDqxgU4NUz1qVLGUe0fjjR0sfpYJJYaNNAWSq4gw6ZtsFI3ypw%2BKOm7J4gY02r6WKWvz0S3At7LMIkxod2g7QKGIEH9mPKXPvcAWVrMoD9jzYNK3OcN9bn1IeJ0d77rUS5P1ffFpEnRKaLajJmpoaa9l%2Bx5wWDGuuOOEeF%2BgPDQgjMYIlXGKZP%2BpFM9lYij0NrEUoOdOqW8oCweYlyp8TQaLgGyYVHPJ2hxGqxbR%2Beo%2F7rKMdZ3QD5vQwckzSsbjuQ2xmUU2Z74NtQfdl0zVHdP3Ytxil20WfhC7y3kpGI%2FmVthLUEN%2F8mMLSY5r4GOp4BfNMM2M3M5pue9N8cEXJ%2BJ6B1UOWdaLpnX6YoGXx9sK7iHtXf60Vgb%2FEzzT7Iuy7IFlr%2BVaoiJguQLcIOkmjqURk7y6Bbh2eXk%2FH1nW9pNJ%2BcPFMJmnF97ewzfbI%2F2KVYxDPqgcarVPQtyyI5BJkNe78qo%2BjpYbrzqylQVhXGZqiyxb6LQCfBo%2Fit304Bo3rpzcqrfPssaHC0iMoBzi0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3KMFTXGZLWHYJVLE%2F20250318%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250318T154020Z&X-Amz-SignedHeaders=host%3Bx-amz-acl&X-Amz-Expires=300&X-Amz-Signature=f31c20e71fb69da5178a48dc262abccf7f8d9125a45a67bcfa099bd0d468ae63",
    "headers": {
        "x-amz-acl": [
            "private"
        ],
        "Content-Type": "video/mp4"
    },
    "file": 12496
}
```
The "file" property contains the id of the file and needs to be used later to finalize the file.


- We make a request to the URL we get back from the previous request with the desired file attached.
```bash
curl -X PUT "https://ziik-application.s3.eu-central-1.amazonaws.com/your-folder/61e4fdd5-3c60-4505-9646-4ec30e13b54d?x-amz-acl=private&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaDGV1LWNlbnRyYWwtMSJIMEYCIQCjJw%2FT8b1hohvUVwZv5kka548yE5sRyfp6ydLTBVtO4wIhAMk8TJwfwOte0yODQ%2B3oUKazvyFx2%2Btw4jW9JknMcVrMKo4DCGEQAhoMNzc4MjA2MTY1NDI2IgwhBoV85IssX9DxAUAq6wLugwWucbK%2B7OL8Lez%2Bx0KjATI3R8SkX9OJnAwvU2X8DprJYlFhCdIKCJ9Gwyn3GVB1uyawrkXcJQSlZGC1MsN5rlnxOgGPfni%2BLsk14e1zo0kTKCv56FDuphyYZZi5iv%2FcT7C9oZdNpytro6u%2F%2FGjxtHWKV37HS7bKNuB4wHjpPc03f3%2BeVVutVpxoqxU3a0FYh%2FUhu8T4LzZYfWhL6McKZPEz9GCHPHFj4UhnfCIU3P%2BGA47Sasd6kCbZboYAfGPgCjvjzZTaMTy1y58H0%2BbVOTab8v%2BB8pgvM5du9eZ8hiys9HJZsgOHYVrDN3ficWQcIBjku7DDYw29Btl%2BoMSOsYlN9YWQj5Of%2B5a9zzUXIh%2B1Jqrkrmft2HKQ2%2FvNrLLbe%2Fm8HoGAnMZbuI8COMGRbUNT6uoDbd%2FGiAZQQhldVD9PIRxFxo3B05W9%2FEUWmVkCBgcUnnOr7fDuCO4AcjOIWSBJVTAQkOIPIkcwvaLmvgY6nAE0Li50g%2FYSaLhO9eLru74yM9RXgtxgcyCCf8wsy2R5osaW7J61pw5O01EV4w2Qe%2FXIHXMYuoihEs4QyLDAQSoQjfJj3g6L12y1FpZRv%2BxNsHYw05AvVJK7edQoKFCBrd6wPjjIPtEEJcD%2F1cIRkv1V%2Fzyh8LUCWhgmrkJ21UQwq7TTnsw0yNsphKhGzU7fx3E1Z6e5fLaJsTkgkn0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3KMFTXGZKAHQB5HY%2F20250318%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250318T153703Z&X-Amz-SignedHeaders=host%3Bx-amz-acl&X-Amz-Expires=300&X-Amz-Signature=19ab909151fb7fbe250f061849bb1d1724fbb2b7bf1dee7e223314997e1c8043"
```

> The above command returns a 200 status with an empty response

- We make a request to tell the API that the upload is done, so it can begin processing the file.

```bash
curl -i -X POST "https://example.ziik.io/api/file/{file}/finalise"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns a 204 No Content status

- We can use this endpoint to track the progress of the processing
- The timestamp should just be the current timestamp in unix seconds. For example 1742376166
```bash
curl -i -X POST "https://example.ziik.io/api/file/80/info/{timestamp}"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```
The body will differ for a processed file and a processing file

- For a file that is processing, the processing is set to true and can be used to determine that the file is still processing.
```json
{
   "data":{
      "id":12521,
      "name":"video (1).mp4",
      "mime":"video/mp4",
      "size":null,
      "type":"video",
      "extension":"mp4",
      "uploaded":false,
      "processing":true,
      "source":"https://example.ziik.io/api/file/12521/1742372593",
      "stream":"https://example.ziik.io/api/file/12521/1742372593",
      "versions":[
         
      ],
      "screenshot":null,
      "date":1742372593,
      "created_at":1742372593,
      "updated_at":1742372593,
      "created_formatted":"19 March 2025",
      "updated_formatted":"19 March 2025"
   }
}
```

- For a file that has completed processing. Processing has been set to false.
```json
{
  "data": {
    "id": 12521,
    "name": "video (1).mp4",
    "mime": "video/mp4",
    "size": 13880759,
    "type": "video",
    "extension": "mp4",
    "uploaded": true,
    "processing": false,
    "source": "https://example.ziik.io/api/file/12521/1742372608",
    "stream": "https://example.ziik.io/api/file/12521/stream/1742372608",
    "versions": [],
    "screenshot": {
      "id": 12522,
      "name": "12521_screenshot.png",
      "mime": "image/png",
      "size": 1562695,
      "type": "image",
      "extension": "png",
      "uploaded": true,
      "processing": false,
      "height": 708,
      "width": 1260,
      "source": "https://example.ziik.io/api/file/12522/1742372607",
      "stream": "",
      "versions": {
        "listing": "https://example.ziik.io/api/file/12522/listing/1742372607",
        "detail": "https://example.ziik.io/api/file/12522/detail/1742372607",
        "thumbnail": "https://example.ziik.io/api/file/12522/thumbnail/1742372607",
        "logo_mobile": "https://example.ziik.io/api/file/12522/logo_mobile/1742372607",
        "logo_desktop": "https://example.ziik.io/api/file/12522/logo_desktop/1742372607",
        "logo_splash": "https://example.ziik.io/api/file/12522/logo_splash/1742372607",
        "splash": "https://example.ziik.io/api/file/12522/splash/1742372607",
        "hero": "https://example.ziik.io/api/file/12522/hero/1742372607",
        "crop_large": "https://example.ziik.io/api/file/12522/cropLarge/1742372607",
        "crop_medium": "https://example.ziik.io/api/file/12522/cropMedium/1742372607",
        "crop_small": "https://example.ziik.io/api/file/12522/cropSmall/1742372607",
        "chat": "https://example.ziik.io/api/file/12522/chat/1742372607",
        "large_square": "https://example.ziik.io/api/file/12522/largeSquare/1742372607",
        "small_square": "https://example.ziik.io/api/file/12522/smallSquare/1742372607",
        "flexible": "https://example.ziik.io/api/file/12522/flexible/1742372607",
        "landscape": "https://example.ziik.io/api/file/12522/landscape/1742372607",
        "portrait": "https://example.ziik.io/api/file/12522/portrait/1742372607"
      },
      "date": 1742372607,
      "created_at": 1742372604,
      "updated_at": 1742372607,
      "created_formatted": "19 March 2025",
      "updated_formatted": "19 March 2025"
    },
    "date": 1742372608,
    "created_at": 1742372593,
    "updated_at": 1742372608,
    "created_formatted": "19 March 2025",
    "updated_formatted": "19 March 2025"
  }
}
```
