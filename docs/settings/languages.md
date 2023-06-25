# Languages

## Get Languages

```bash
curl -i -X GET "https://example.ziik.io/api/settings/languages"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

```json
{
  "data": {
    "da": "Dansk",
    "en": "English",
    "sv": "Svenska",
    "sv": "Deutsch",
    "sv": "Suomi"
  }
}
```

This endpoint retrieves languages in ISO format localised to the language itself

### HTTP Request

`GET https://example.ziik.io/api/settings/languages`