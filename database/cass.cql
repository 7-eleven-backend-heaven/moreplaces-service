DROP KEYSPACE IF EXISTS moreplaces;

CREATE KEYSPACE moreplaces WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE moreplaces;

CREATE TABLE savedlists (
  listid int,
  listname text,
  PRIMARY KEY (listid)
);

CREATE TABLE relatedids (
  mainpropid int,
  relatedid list<int>,
  PRIMARY KEY (mainpropid)
);

CREATE TABLE properties (
  propertyid int,
  description text,
  imageurl text,
  issuperhost boolean,
  numofratings int,
  numofrooms int,
  price text,
  propertytype text,
  rating decimal,
  savedlistid int,
  PRIMARY KEY (propertyid)
);

COPY savedlists FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/savedData.csv' WITH HEADER=TRUE;

COPY relatedids FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/cassRelated.csv' WITH DELIMITER=';' AND HEADER=TRUE;

COPY properties FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/propertiesData.csv' WITH HEADER=TRUE;

