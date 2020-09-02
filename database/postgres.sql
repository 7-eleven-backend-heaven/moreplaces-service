DROP DATABASE IF EXISTS moreplaces;
CREATE DATABASE moreplaces;

\c moreplaces;

DROP TABLE IF EXISTS savedList;
DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS related;

CREATE TABLE savedList (
  listid SERIAL NOT NULL PRIMARY KEY,
  listname VARCHAR NOT NULL
);

CREATE TABLE properties (
  propertyid SERIAL NOT NULL PRIMARY KEY,
  caption VARCHAR,
  imageurl VARCHAR NOT NULL,
  issuperhost BOOLEAN NOT NULL,
  numofratings INT,
  numofrooms INT NOT NULL,
  price VARCHAR NOT NULL,
  propertytype VARCHAR NOT NULL,
  rating DECIMAL,
  savedlistid INT DEFAULT NULL
  -- CONSTRAINT fk_list
  --   FOREIGN KEY (savedListId)
  --     REFERENCES savedList(listId)
  --     ON DELETE SET NULL
);

CREATE TABLE related (
  mainpropid INT,
  relatedid INT
  -- CONSTRAINT fk_main
  --   FOREIGN KEY (mainPropId)
  --     REFERENCES properties(propertyId)
  --     ON DELETE CASCADE,
  -- CONSTRAINT fk_related
  --   FOREIGN KEY (relatedId)
  --     REFERENCES properties(propertyId)
  --     ON DELETE CASCADE
);

SELECT NOW()::TIME;

\COPY savedList FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/savedData.csv' DELIMITER ',' CSV HEADER;

\COPY properties FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/propertiesData.csv' DELIMITER ',' CSV HEADER;

\COPY related FROM '/Users/susie/Documents/hack-reactor/HRSF129/sdc-airbnb/moreplaces-service/database/relatedData.csv' DELIMITER ',' CSV HEADER;

SELECT NOW()::TIME;

ALTER TABLE properties ADD CONSTRAINT fk_list FOREIGN KEY (savedListId) REFERENCES savedList(listId) ON DELETE SET NULL;

ALTER TABLE related ADD CONSTRAINT fk_main FOREIGN KEY (mainPropId) REFERENCES properties(propertyId) ON DELETE CASCADE;

ALTER TABLE related ADD CONSTRAINT fk_related FOREIGN KEY (relatedId) REFERENCES properties(propertyId) ON DELETE CASCADE;