# User Events
Ziik triggers the following user events:
* user.create - when a new user is created
* user.update - when a user is edited or otherwise updated in the system
* user.delete - when a user is deactivated and anonymised in Ziik

The user events trigger calls to webhooks with the following data as JSON in the request body

```json
{
  "content_type": "user",
  "id": 3,
  "name": "Hobart Green",
  "first_name": "Hobart",
  "last_name": "Green",
  "title": "Program Director",
  "active": true,
  "ask_about": "Explicabo quis laboriosam in. Eum eum fugit ducimus et est voluptatem. Laborum officia libero velit sunt. Officiis est aut dolores eius commodi qui consequuntur.",
  "country": "Aruba",
  "quote": "Eius qui animi nihil.",
  "description": "Quam provident quo et architecto ut voluptatem. Ipsum asperiores optio sint qui dolor autem optio.",
  "phone": "563.678.6609",
  "email": "user@example.net",
  "abilities": {
    "news": false,
    "calendar": false,
    "manuals": false,
    "faq": false,
    "groups": true,
    "quick_links": false,
    "user": false,
    "units": false,
    "supplier": false,
    "schedule": false,
    "shift_trading_request": false,
    "shift_trading_take": false,
    "shift_trading_approve": false,
    "vacation_own": false,
    "vacation_unit": false
  },
  "userTypes": [],
  "unit": {
    "content_type": "unit",
    "id": 1,
    "name": "HQ",
    "level": 0,
    "unit_type": "unit",
    "parent": null,
    "parent_id": null,
    "stats": [],
    "url": "api/units/1"
  },
  "physicalUnit": {
    "content_type": "unit",
    "id": 1,
    "name": "HQ",
    "level": 0,
    "unit_type": "unit",
    "parent": null,
    "parent_id": null,
    "stats": [],
    "url": "api/units/1"
  },
  "url": "api/users/3"
}
```