## Server API

### Get Property info
  * GET `/property/{property_id}`
  * GET `/properties`

**Path Parameters:**
  * `{property_id}` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Save to a List
  * POST `/saved/{list_id}/{property_id}`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "googleMap": "String location",
      "cost": "Number"
    }
```

### Update List
  * PATCH `/saved/{list_id}`

**Path Parameters:**
  * `list_id` list id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Delete from list
  * DELETE `/saved/{list_id}`

**Path Parameters:**
  * `{list_id}` list id

**Success Status Code:** `204`
