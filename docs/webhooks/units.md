# Unit Events
Ziik triggers the following unit events:
* unit.create - when a new unit is created
* unit.update - when a unit is edited or otherwise updated in the system
* unit.delete - when a unit is deleted from the system

The unit events trigger calls to webhooks with the following data as JSON in the request body

```json
{
  "content_type": "unit",
  "id": 2,
  "name": "Larkin Ltd",
  "level": 0,
  "unit_type": "unit",
  "departments": [],
  "parent": null,
  "parent_id": null,
  "stats": {
    "users": 0,
    "children": 0
  },
  "url": "api/units/2"
}
```