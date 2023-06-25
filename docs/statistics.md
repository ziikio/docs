# Statistics

## Get Statistics

```bash
curl "https://example.ziik.io/api/statistics"
  -H "Authorization: Bearer aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc"
```

> The above command returns JSON structured like this:

```json
{
  "data": {
    "users": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 1
        },
        "sum": 1
      },
      "active": {
        "data": [
          {
            "id": 2,
            "name": "Delilah Cremin",
            "status": null,
            "avatarId": null,
            "comments": "0",
            "contents": "0",
            "messages": "0",
            "likes": "0",
            "confirms": "0",
            "folders": "0",
            "shifts": "0",
            "devices": "0"
          }
        ],
        "sum": 1
      },
      "mobile": {
        "data": [],
        "sum": 0,
        "percent": 0
      },
      "total": 1
    },
    "units": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 3
        },
        "sum": 3
      },
      "total": 4
    },
    "news": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "debates": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "events": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "comments": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0,
      "replies_total": 0
    },
    "likes": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "mentions": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "reads": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "messages": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "sms": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "files": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "disk": {
      "history": {
        "data": {
          "2018-10-22": 0,
          "2018-10-23": 0,
          "2018-10-24": 0,
          "2018-10-25": 0,
          "2018-10-26": 0,
          "2018-10-27": 0,
          "2018-10-28": 0,
          "2018-10-29": 0
        },
        "sum": 0
      },
      "total": 0
    },
    "pageviews": {
      "search": {
        "history": {
          "data": {
            "2018-10-22": 0,
            "2018-10-23": 0,
            "2018-10-24": 0,
            "2018-10-25": 0,
            "2018-10-26": 0,
            "2018-10-27": 0,
            "2018-10-28": 0,
            "2018-10-29": 0
          },
          "sum": 0
        },
        "total": 0
      },
      "faqs": {
        "history": {
          "data": {
            "2018-10-22": 0,
            "2018-10-23": 0,
            "2018-10-24": 0,
            "2018-10-25": 0,
            "2018-10-26": 0,
            "2018-10-27": 0,
            "2018-10-28": 0,
            "2018-10-29": 0
          },
          "sum": 0
        },
        "total": 0
      },
      "manuals": {
        "history": {
          "data": {
            "2018-10-22": 0,
            "2018-10-23": 0,
            "2018-10-24": 0,
            "2018-10-25": 0,
            "2018-10-26": 0,
            "2018-10-27": 0,
            "2018-10-28": 0,
            "2018-10-29": 0
          },
          "sum": 0
        },
        "total": 0
      },
      "downloads": {
        "history": {
          "data": {
            "2018-10-22": 0,
            "2018-10-23": 0,
            "2018-10-24": 0,
            "2018-10-25": 0,
            "2018-10-26": 0,
            "2018-10-27": 0,
            "2018-10-28": 0,
            "2018-10-29": 0
          },
          "sum": 0
        },
        "total": 0
      }
    }
  }
}
```

Get site usage statistics

### HTTP Request

`GET https://example.ziik.io/api/statistics/AREA`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
AREA | String | (Optional - if left out, all above stats will be returned) Restrict stats to only one area.

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
start | Integer | Null | (Required) Unix timestamp for period start
end | Integer | Null | (Required) Unix timestamp for period end
offset | Integer | Null | (Required) Offset to GMT. Number of minutes that GMT is ahead or behind local time. Note that this is the reverse of timezones - e.g. Europe/Berlin is GMT+1, but offset -60 minutes, since GMT is 60 minutes behind Europe/Berlin
unit | Integer | User's physical unit | Unit to fetch stats from
falldown | Boolean | False | Whether to fetch statistics for sub-units to the selected unit