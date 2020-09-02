DROP KEYSPACE IF EXISTS moreplaces;

CREATE KEYSPACE moreplaces WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE moreplaces;

CREATE TABLE savedList (
  listId int PRIMARY KEY,
  name text,
);

CREATE TABLE properties (
  propertyId int PRIMARY KEY,
  imageUrl text,
  isSuperhost boolean,
  propertyType text,
  numOfRooms int,
  rating decimal,
  numOfRatings int,
  caption text,
  price text,
  savedListId int,
);

CREATE TABLE related (
  mainPropId int PRIMARY KEY,
  relatedPropId int
);