# Settings

Site settings describe certain settings for the site, regarding logos, slogans and colors used.

## Get Settings

```bash
curl "https://example.ziik.io/api/settings"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": {
    "site": {
      "name": "Ziik",
      "tagline": "Facilitating knowledge sharing and social interaction",
      "headline": "Welcome to Ziik",
      "identifier": "example",
      "legal_name": "HQ",
      "terms_link": null,
      "default_language": null
    },
    "images": {
      "logo": [],
      "mobile": [],
      "mobile_bg": [],
      "icon": [],
      "selected_mobile_logo": "mobile"
    },
    "colors": {
      "top": "#999999",
      "icon": "#ffffff",
      "active": "#555555"
    },
    "modules": {
      "news": true,
      "groups": true,
      "calendar": true,
      "quicklinks": true,
      "documents": true,
      "chat": true,
      "faq": true,
      "manuals": true,
      "shifts": true,
      "twofactor": true,
      "statistics": true
    },
    "twofactor": {
      "force": false,
      "methods": {
        "google": true,
        "sms": true
      }
    },
    "login": [],
    "apps": {
      "ios": {
        "latest": 169,
        "minimum": 147
      },
      "android": {
        "latest": 102,
        "minimum": 81
      }
    }
  }
}
```

This endpoint retrieves site settings for logos and colors

### HTTP Request

`GET https://example.ziik.io/api/settings`

### Query Parameters

None - all settings are returned

## Update Settings

```bash
curl -i -X PATCH "https://example.ziik.io/api/settings"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
  -d "{ [...] }"
```

> The above command returns 204 No Content on successful update.

```http
HTTP/1.0 204 No Content
```

This endpoint replaces settings with the provided values.

### HTTP Request

`PATCH https://example.ziik.io/api/settings`

### Request Parameters

Parameter | Type | Required | Description
--------- | ---- |  ------- | -----------
site | Array | No | Site settings array with the following values
- name | String | No | Name of the intranet - shown in title bar in browsers etc.
- tagline | String | No | Tagline - shown in page footer
- headline | String | No | Introduction text - shown on login page
- legal_name | String | No | Name of company used in policy acceptance message
- terms_link | URL | No | URL to a page, where users can read about the company's legal terms
- default_language | String | No | Default language used when creating or importing users where language is not provided. Possible values are the keys returned from /api/settings/languages
colors | Array | No | Site colors array with the following values
- top | String | No | Set the hex code for the color of the top bar in clients
- icon | String | No | Set the hex code for the icons in the top bar in clients

### Permissions Required

* User must be Administrator