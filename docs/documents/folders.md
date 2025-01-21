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

-   Manage access to folder
-   OR creator of folder
