# Import

## Import Units From File
```bash
curl -i -X POST "https://example.ziik.io/api/units/import"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
    "data":{
        "total":9,
        "skipped":0,
        "imported":9
    }
}
```

This endpoint imports units from a CSV, XLSX or XLS file

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
mapping | Array | Yes | Mapping of column numbers to data type - e.g. [0 => 'name', 1 => 'parent']
file | FormData | Yes | The file as application/form-data

:::warning
Parent units *must* be strings written exactly like the unit name of either an existing unit or a unit earlier in the import file
:::

### Permissions Required

* Edit permission to units set as parents in the import file