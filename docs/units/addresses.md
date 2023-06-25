# Addresses

On creation, addresses for a unit, its delivery address and invoicing address are automatically created.

## Edit Unit Address

```bash
curl -i -X PATCH "https://example.ziik.io/api/units/123/addresses/1234"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint updates an existing unit address.

### HTTP Request

`PATCH https://example.ziik.io/api/units/UNITID/addresses/ADDRESSID`

### URL Parameters

Parameter | Type | Description
--------- | ---- | -----------
UNITID | Integer | ID of unit
ADDRESSID | Integer | ID of unit address - must be in unit

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
use_company_address | Boolean | No | Whether this address is the same as company address (only applicable for delivery and invoicing addresses)
name | String | No | A descriptive name for the address
registration_number | String | No | Company registration number
vat_number | String | No | VAT number for company
street | String | No | Street address
street_additional | String | No | Additional street address information
postal_code | String | No | Postal/Zip code
city | String | No | City name
country | String | No | Name of country
phone | String | No | Main phone number
email | String | No | Main contact email
comments | String | No | Comments for the address - freetext

### Permissions Required

* Edit permission to the unit