CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
