DROP KEYSPACE IF EXISTS moreplaces;

CREATE KEYSPACE moreplaces WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE moreplaces;

CREATE TABLE savedList (
  listId int,
  name text,
  PRIMARY KEY (listId)
);

CREATE TABLE properties (
  propertyId int,
  imageUrl text,
  isSuperhost boolean,
  propertyType text,
  numOfRooms int,
  rating int,
  numOfRatings int,
  caption text,
  price int,
  savedListId int,
  PRIMARY KEY (propertyId)
);

CREATE TABLE related (
  mainPropId int,
  relatedPropId int
);