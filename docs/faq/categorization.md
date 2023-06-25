# Categories

## Create FAQ Category

```bash
curl -i -X POST "https://example.ziik.io/api/faq/categories"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created category

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/faq/categories/1234
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/faq/categories/1"
  }
}
```

This endpoint creates a new FAQ category.

### HTTP Request

`POST https://example.ziik.io/api/faq/categories`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Category name

### Permissions Required

* Administer permission to categories

## Get FAQ Categories

```bash
curl "https://example.ziik.io/api/faq/categories"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 9,
      "name": "delectus",
      "url": "api/faq/categories/9"
    },
    {
      "id": 8,
      "name": "eius",
      "url": "api/faq/categories/8"
    },
    {
      "id": 10,
      "name": "et",
      "url": "api/faq/categories/10"
    }
  ]
}
```

This endpoint retrieves a list of FAQ categories.

### HTTP Request

`GET https://example.ziik.io/api/faq/categories`

### Query Parameters

None

## Get Single FAQ Category
```bash
curl "https://example.ziik.io/api/faq/categories/1"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "name": "repellendus",
    "url": "api/faq/categories/1"
  }
}
```

### HTTP Request

`GET https://example.ziik.io/api/faq/categories/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the category

### Permissions Required

* Authenticated user

## Edit FAQ Category

```bash
curl -i -X PATCH "https://example.ziik.io/api/faq/categories/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing FAQ category.

### HTTP Request

`PATCH https://example.ziik.io/api/faq/categories/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | New category name

### Permissions Required

* Administer permission to categories

## Delete FAQ Category

```bash
curl -i -X DELETE "https://example.ziik.io/api/faq/categories/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a FAQ category.

### HTTP Request

`DELETE https://example.ziik.io/api/faq/categories/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the category to delete

### Permissions Required

* Administer permission to categories