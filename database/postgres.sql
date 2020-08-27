CREATE SCHEMA moreplaces

CREATE TABLE moreplaces.savedList (
  listId SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  PRIMARY KEY (listId)
)

CREATE TABLE moreplaces.property (
  propertyId INT NOT NULL,
  imageUrl VARCHAR NOT NULL,
  isSuperhost BOOLEAN NOT NULL,
  propertyType VARCHAR NOT NULL,
  numOfRooms INT NOT NULL,
  rating INT,
  numOfRatings INT,
  description VARCHAR,
  price INT NOT NULL,
  savedListId INT,
  PRIMARY KEY (propertyId),
  CONSTRAINT fk_list
    FOREIGN KEY (savedListId)
      REFERENCES savedList(listId)
)


