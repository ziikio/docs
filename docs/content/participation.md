# Participation
Content with events can have participation enabled, meaning that users are asked to confirm whether they will participate in the event.

## Get Content Event Participants
```bash
curl "https://example.ziik.io/api/events/123/participants"
  -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

```json
{
  "data": [
    {
      "id": 2,
      "name": "Rashad Kilback",
      "first_name": "Rashad",
      "last_name": "Kilback",
      "title": "Molding Machine Operator",
      "rsvp": null,
      "url": "api/users/2",
      "avatar": null,
      "active": true,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "description": null,
        "level": 0,
        "leaf": true,
        "unit_type": "unit",
        "addresses": [],
        "contact": {
          "name": "",
          "phone": ""
        },
        "opening_hours": {
          "office_hours": null,
          "closed": null
        },
        "geo": {
          "lat": null,
          "lng": null
        },
        "stats": [],
        "permissions": {
          "edit": true,
          "delete": false
        },
        "url": "api/units/1"
      }
    },
    {
      "id": 5,
      "name": "Roger Hahn",
      "first_name": "Roger",
      "last_name": "Hahn",
      "title": "Business Development Manager",
      "rsvp": 2,
      "url": "api/users/5",
      "avatar": null,
      "active": true,
      "unit": {
        "content_type": "unit",
        "id": 1,
        "name": "HQ",
        "description": null,
        "level": 0,
        "leaf": true,
        "unit_type": "unit",
        "addresses": [],
        "contact": {
          "name": "",
          "phone": ""
        },
        "opening_hours": {
          "office_hours": null,
          "closed": null
        },
        "geo": {
          "lat": null,
          "lng": null
        },
        "stats": [],
        "permissions": {
          "edit": true,
          "delete": false
        },
        "url": "api/units/1"
      }
    }
  ],
  "links": {
    "first": "https://example.ziik.io/api/events/1/participants?page=1",
    "last": "https://example.ziik.io/api/events/1/participants?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https://example.ziik.io/api/events/1/participants",
    "per_page": 50,
    "to": 2,
    "total": 2
  }
}
```
This endpoint retrieves a list of participants to an event.

### HTTP Request

`GET https://example.ziik.io/api/events/ID/participants`

### Query Parameters

Parameter | Type | Default | Description
--------- | ---- | ------: | -----------
invited | Boolean | NULL | If set, return only participants that are invited, but have not replied
accepted | Boolean | NULL | If set, return only participants that have accepted the event
rejected | Boolean | NULL | If set, return only participants that have declined the event
page | Integer | 1 | Page number for pagination.
limit | Integer | 50 | Number of records to return per page.

### Permissions Required

* Read access to the event (See "Get Single Content")

## Accept Event Invitation
```bash
curl -i -X POST "https://example.ziik.io/api/events/1234/participants"
       -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks the user as accepting the invitation

### HTTP Request

`POST https://example.ziik.io/api/events/1234/participants`

### Request Parameters

None

### Permissions Required

* Read access to the event (See "Get Single Content")

## Decline Event Invitation
```bash
curl -i -X DELETE "https://example.ziik.io/api/events/1234/participants"
       -H "Authorization: Bearer aaaaaaaaa.bbbbbbbbb.cccccccccc"
```

> The above command returns 204 No Content on success

```http
HTTP/1.0 204 No Content
```

This endpoint marks the user as accepting the invitation

### HTTP Request

`DELETE https://example.ziik.io/api/events/1234/participants`

### Request Parameters

None

### Permissions Required

* Read access to the event (See "Get Single Content")
