## Calendar

Returns a list of calendar items within a specified datetime range. Calendar items include events, birthdays, and shifts.

### HTTP Request

`GET https://example.ziik.io/api/calendar`

### Query Parameters

Parameter | Type | Required | Example
---- | ---- | ------ | -----------
start | String | Yes | 2022-10-20T00:00:00+02:00
end | String | Yes | 2022-11-22T00:00:00+02:00

### Response

``` json
{
  "data": [
    {
      "id": 1,
      "type": "event",
      "content_id": 1,
      "title": "Example title",
      "participation": {
          "enabled": false,
          "accepted": 0,
          "rejected": 0,
          "rsvp": null
      },
      "stats": {
          "comments": 10
      },
      "all_day": true,
      "start": "2022-10-28T00:00:00Z",
      "end": "2022-10-28T23:59:59Z"
    },
    {
      "user_id": 1,
      "type": "birthday",
      "start": "2023-01-05"
    },
    {
      "id": 1,
      "type": "shift",
      "shift_type": "taken",
      "start": "2022-10-28T07:00:00Z",
      "end": "2022-10-28T16:00:00Z",
    },
  ]
}
```