# Shift Exporting

Shift data can be exported in Microsoft XLSX format.

## Export Shift Data
```bash
curl -i -X GET "https://example.ziik.io/api/shifts/export"
  -H "Authorization: Bearer aaaaaa.bbbbbb.cccccc"
```

> The above command returns an XLSX document with shift data for the filtering parameters

This endpoints returns an XLSX document with shift data for the filtering parameters

### HTTP Request

`GET https://example.ziik.io/api/shifts/export`

### Query Parameters

Parameter | Type | Required | Description
--------- | ---- | ------: | -----------
unit | Integer | If no user specified | ID of unit
user | Integer | If no unit specified | ID of user
start | Integer | Yes | UNIX Timestamp of earliest starting timestamp for shift
end | Integer | Yes | UNIX Timestamp of latest starting timestamp for shift
types | Array | No | Array of shift types (1,2 and/or 3) - defaults to any type