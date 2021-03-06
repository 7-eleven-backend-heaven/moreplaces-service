## More Places API

### Get Property info
  * GET `/property/:propertyId`

**Path Parameters:**
  * `:propertyId` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "propertyId": "Number",
      "imageUrl": "String",
      "isSuperhost": "Boolean",
      "propertyType": "String",
      "numOfRooms": "String",
      "rating": "Number",
      "numOfRatings": "Number",
      "caption": "String",
      "price": "Number",
      "savedListId": "Number"
    }
```

### Add a property
  * POST `/property/:propertyId`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "propertyId": "Number",
      "imageUrl": "String",
      "isSuperhost": "Boolean",
      "propertyType": "String",
      "numOfRooms": "String",
      "rating": "Number",
      "numOfRatings": "Number",
      "caption": "String",
      "price": "Number",
      "savedListId": "Number"
    }
```

### Update Property
  * PATCH `/properties/:propertyId`

**Path Parameters:**
  * `:propertyId` property id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "imageUrl": "String",
      "isSuperhost": "Boolean",
      "propertyType": "String",
      "numOfRooms": "String",
      "rating": "Number",
      "numOfRatings": "Number",
      "caption": "String",
      "price": "Number",
      "savedListId": "Number"
    }
```

### Delete property
  * DELETE `/property/:propertyId`

**Path Parameters:**
  * `:propertyId` property id

**Success Status Code:** `204`
