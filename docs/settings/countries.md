# Countries

## Get Countries

```bash
curl -i -X GET "https://example.ziik.io/api/settings/countries"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

```json
{
  "data": {
    "AF": "Afghanistan",
    "AL": "Albanien",
    "DZ": "Algeriet",
    "AS": "Amerikansk Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarktis",
    "AG": "Antigua og Barbuda",
    "AR": "Argentina",
    "AM": "Armenien",
    "AW": "Aruba",
    "AZ": "Aserbajdsjan",
    "AU": "Australien",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BE": "Belgien",
    "BZ": "Belize",
    [... Snip ...]
    "EH": "Vestsahara",
    "VN": "Vietnam",
    "WF": "Wallis og Futuna\u00f8erne",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "\u00c5land",
    "EG": "\u00c6gypten",
    "GQ": "\u00c6kvatorialguinea",
    "AT": "\u00d8strig"
  }
}
```

This endpoint retrieves countries in ISO format and in the language of the current user

### HTTP Request

`GET https://example.ziik.io/api/settings/countries`