# Import

## Import Users From File
```bash
curl -i -X POST "https://example.ziik.io/api/users/import"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
    "data":{
        "total": 25,
        "skipped": 2,
        "exists": 3,
        "imported": 20,
    }
}
```

This endpoint imports users from a CSV, XLSX or XLS file.

Users without unit, user type or email are skipped
Users that already exist with the email address are not imported

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
mapping | Array | Yes | Mapping of column numbers to data type - e.g. [0 => 'email', 1 => 'unit']
file | FormData | Yes | The file as application/form-data

:::warning
Units and user types *must* be strings written exactly like the name of an existing unit or user type
:::

### Permissions Required

* Manage users permission
* Units in the import file are the current user's own unit or below