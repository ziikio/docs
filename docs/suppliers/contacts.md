# Contacts
Contacts are persons working at the supplier that can be contacted for enquiries.

## Create Contact
```bash
curl -i -X POST "https://example.ziik.io/api/suppliers/123/contacts"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 201 Created with a location header for where to find the newly created contact

```http
HTTP/1.0 201 Created
Location: https://example.ziik.io/api/suppliers/contacts/1234
{
  "data": {
    "id": 2,
    "name": "Walter Ensign",
    "title": "New Accounts Clerk",
    "email": "ewalter@yahoo.com",
    "phone": "741-570-6115 x0637",
    "mobile": "1-480-572-9152",
    "skype": "walter.ensign"
  }
}
```

This endpoint creates a new supplier contact.

### HTTP Request

`POST https://example.ziik.io/api/suppliers/ID/contacts`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | ID of the supplier

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | Yes | Contact name
title | String | No | Contact work title
email | String | No | Contact email
mobile | String | No | Contact mobile phone number
phone | String | No | Contact phone number
skype | String | No | Contact Skype name

### Permissions Required

* Edit permission to supplier

## Get Contacts For Supplier
```bash
curl "https://example.ziik.io/api/suppliers/123/contacts"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "John Miller",
      "title": "Cultural Studies Teacher",
      "email": "eabbott@hotmail.com",
      "phone": "784.852.1280 x20364",
      "mobile": "+1-541-547-7087",
      "skype": "john.miller"
    }
  ]
}
```

This endpoint retrieves a list of contacts for a supplier.

### HTTP Request

`GET https://example.ziik.io/api/suppliers/ID/contacts`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
ID | Integer | The ID of the supplier

### Permissions Required

* Access to supplier

## Get Single Contact
```bash
curl "https://example.ziik.io/api/suppliers/123/contacts/12"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": {
    "id": 1,
    "name": "Jeffrey Pfeffer",
    "title": "Gas Plant Operator",
    "email": "murazik.maya@hotmail.com",
    "phone": "594.776.5640 x59977",
    "mobile": "+16264716750",
    "skype": "Jeffrey.Pfeffer"
  }
}
```

This endpoint retrieves a single contact from a supplier.

### HTTP Request

`GET https://example.ziik.io/api/suppliers/SUPPLIERID/contacts/CONTACTID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
SUPPLIERID | Integer | The ID of the supplier
CONTACTID | Integer | The ID of the contact - must be connected to the supplier

### Permissions Required

* Access to supplier

## Edit Contact

```bash
curl -i -X PATCH "https://example.ziik.io/api/suppliers/123/contacts/12"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing supplier contact.

### HTTP Request

`PATCH https://example.ziik.io/api/suppliers/SUPPLIERID/contacts/CONTACTID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
SUPPLIERID | Integer | The ID of the supplier
CONTACTID | Integer | The ID of the contact - must be connected to the supplier

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
name | String | No | Contact name
title | String | No | Contact work title
email | String | No | Contact email
mobile | String | No | Contact mobile phone number
phone | String | No | Contact phone number
skype | String | No | Contact Skype name

### Permissions Required

* Edit permission to supplier

## Delete Contact

```bash
curl -i -X DELETE "https://example.ziik.io/api/suppliers/123/contacts/12"
  -H "Authorization: Bearer aaaaaa.bbbbbbb.ccccccc"
```

> The above command returns a 204 No Content header on success:

```http
HTTP/1.0 204 No Content
```

This endpoint deletes a contact from a supplier.

### HTTP Request

`DELETE https://example.ziik.io/api/suppliers/SUPPLIERID/contacts/CONTACTID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
SUPPLIERID | Integer | The ID of the supplier
CONTACTID | Integer | The ID of the contact - must be connected to the supplier

### Permissions Required

* Edit permission to supplier