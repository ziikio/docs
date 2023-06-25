# Suppliers

## Create Supplier

```bash
curl -i -X POST "https://example.ziik.io/api/suppliers"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created supplier

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/suppliers/1234
{
  "data": {
    "id": 1,
    "content_type": "supplier",
    "name": "Some Supplier Inc",
    "description": null,
    "webpage": {
      "url": "http://",
      "title": null,
      "attributes": []
    },
    "webshop": {
      "url": "https://webshop.example.com",
      "title": null,
      "attributes": []
    },
    "payment": {
      "account_number": null,
      "bank": null,
      "bic": null,
      "branch": null,
      "eban": null,
      "delivery": null,
      "payment": null
    },
    "agreement": null,
    "permissions": {
      "edit": false,
      "delete": false
    },
    "visibility": [],
    "url": "api/units/1"
  }
}
```

This endpoint creates a new supplier.

### HTTP Request

`POST https://example.ziik.io/api/suppliers`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Supplier name.
description | String | No | Supplier description.
categories | Array | No | IDs of the supplier categories
visibility | Array | No | Array of visibility options:
- userTypes | Array | No | User type IDs of the user types, who can see this supplier
- units | Array | No | Units this suppliershould be published in
- units_falldown | Array | No | Units this supplier should be published in along with its sub-units
address | Array | No | Address data for the primary company address with the following values
- phone | String | No | Main phone number (freetext) of supplier
- email | String | No | Main contact email for supplier
- street | String | No | Street address
- postal_code | String | No | Postal code
- city | String | No | City name
- webpage | String | No | URL to supplier's website
- webshop | String | No | URL to supplier's webshop
- vat_number | String | No | VAT number for the supplier
- registration_number | String | No | Company registration number
payment | Array | No | Payment information with the following values
- account_number | String | No | Bank account number
- bank | String | No | Bank name
- bic | String | No | Bank BIC identifier
- branch | String | No | Bank branch number
- eban | String | No | Bank EBAN identifier
- delivery | String | No | Delivery terms
- payment | String | No | Payment terms
agreement | String | No | General text describing the agreement with the supplier

### Permissions Required

* Administer suppliers permission

## Get Suppliers
```bash
curl "https://example.ziik.io/api/suppliers"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 3,
      "content_type": "supplier",
      "name": "Rodriguez, Connelly and Weissnat",
      "description": "Quod tempore laudantium facilis accusamus iure. Maiores sed dolores ducimus et animi. Expedita quaerat qui ut quasi nostrum. Ut harum a harum beatae molestiae rem eveniet.",
      "categories": [],
      "type": "chain",
      "address": null,
      "webpage": {
        "url": "http://",
        "title": null,
        "attributes": []
      },
      "webshop": {
        "url": "http://",
        "title": null,
        "attributes": []
      },
      "payment": {
        "account_number": null,
        "bank": null,
        "bic": null,
        "branch": null,
        "eban": null,
        "delivery": null,
        "payment": null
      },
      "agreement": null,
      "permissions": {
        "edit": false,
        "delete": false
      },
      "files": [],
      "contacts": [],
      "visibility": {
        "units": [
          {
            "content_type": "unit",
            "id": 3,
            "name": "Gulgowski-Tremblay",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/3"
          },
          {
            "content_type": "unit",
            "id": 1,
            "name": "HQ",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/1"
          },
          {
            "content_type": "unit",
            "id": 2,
            "name": "Thompson Group",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/2"
          },
          {
            "content_type": "unit",
            "id": 4,
            "name": "Zemlak, Crist and Hayes",
            "level": 0,
            "unit_type": "unit",
            "falldown": false,
            "url": "api/units/4"
          }
        ],
        "userTypes": [
          {
            "id": 1,
            "name": "Manager"
          },
          {
            "id": 2,
            "name": "Employee"
          }
        ]
      },
      "url": "api/units/3"
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/suppliers?page=1",
    "last": "https://example.ziik.io/api/suppliers?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/suppliers",
    "per_page": 50,
    "to": 3,
    "total": 3
  }
}
```

This endpoint retrieves a list of suppliers.

### HTTP Request

`GET https://example.ziik.io/api/suppliers`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
category | Integer | NULL | If set, only show suppliers from this category
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

## Get Single Supplier

```bash
curl "https://example.ziik.io/api/suppliers/822"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "id": 1,
    "content_type": "supplier",
    "name": "Ratke and Sons",
    "description": "Commodi ab qui omnis quo. Doloremque aliquam sed tenetur earum.",
    "categories": [],
    "type": "unit",
    "address": null,
    "webpage": {
      "url": "http://",
      "title": null,
      "attributes": []
    },
    "webshop": {
      "url": "http://",
      "title": null,
      "attributes": []
    },
    "payment": {
      "account_number": null,
      "bank": null,
      "bic": null,
      "branch": null,
      "eban": null,
      "delivery": null,
      "payment": null
    },
    "agreement": null,
    "permissions": {
      "edit": false,
      "delete": false
    },
    "files": [],
    "contacts": [],
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
      "userTypes": []
    },
    "url": "api/units/1"
  }
}
```

This endpoint returns a single supplier

### HTTP Request

`GET https://example.ziik.io/api/suppliers/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the supplier

### Permissions Required

* Supplier units and user types match the user's

## Edit Supplier

```bash
curl -i -X PATCH "https://example.ziik.io/api/suppliers/123"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing supplier.

### HTTP Request

`PATCH https://example.ziik.io/api/suppliers/ID`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | Supplier name.
description | String | No | Supplier description.
categories | Array | No | IDs of the supplier categories
visibility | Array | No | Array of visibility options:
- userTypes | Array | No | User type IDs of the user types, who can see this supplier
- units | Array | No | Units this suppliershould be published in
- units_falldown | Array | No | Units this supplier should be published in along with its sub-units
address | Array | No | Address data for the primary company address with the following values
- phone | String | No | Main phone number (freetext) of supplier
- email | String | No | Main contact email for supplier
- street | String | No | Street address
- postal_code | String | No | Postal code
- city | String | No | City name
- webpage | String | No | URL to supplier's website
- webshop | String | No | URL to supplier's webshop
- vat_number | String | No | VAT number for the supplier
- registration_number | String | No | Company registration number
payment | Array | No | Payment information with the following values
- account_number | String | No | Bank account number
- bank | String | No | Bank name
- bic | String | No | Bank BIC identifier
- branch | String | No | Bank branch number
- eban | String | No | Bank EBAN identifier
- delivery | String | No | Delivery terms
- payment | String | No | Payment terms
agreement | String | No | General text describing the agreement with the supplier

### Permissions Required

* Administer suppliers permission

## Delete Supplier

```bash
curl -i -X DELETE "https://example.ziik.io/api/suppliers/123"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a supplier.

### HTTP Request

`DELETE https://example.ziik.io/api/suppliers/ID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the supplier to delete

### Permissions Required

* Administer suppliers permission
* Supplier created in user's own unit
