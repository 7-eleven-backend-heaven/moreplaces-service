CREATE DATABASE moreplaces;

\c moreplaces;

DROP TABLE IF EXISTS savedList;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS related;

CREATE TABLE savedList (
  listId SERIAL NOT NULL,
  listName VARCHAR NOT NULL,
  PRIMARY KEY (listId)
)

CREATE TABLE properties (
  propertyId SERIAL NOT NULL,
  imageUrl VARCHAR NOT NULL,
  isSuperhost BOOLEAN NOT NULL,
  propertyType VARCHAR NOT NULL,
  numOfRooms INT NOT NULL,
  rating INT,
  numOfRatings INT,
  caption VARCHAR,
  price INT NOT NULL,
  savedListId INT,
  PRIMARY KEY (propertyId),
  CONSTRAINT fk_list
    FOREIGN KEY (savedListId)
      REFERENCES savedList(listId)
      ON DELETE SET NULL
)

CREATE TABLE related (
  mainPropId INT,
  relatedId INT,
  CONSTRAINT fk_main
    FOREIGN KEY (mainPropId)
      REFERENCES properties(propertyId)
      ON DELETE CASCADE,
  CONSTRAINT fk_related
    FOREIGN KEY (relatedId)
      REFERENCES properties(propertyId)
      ON DELETE CASCADE
);
