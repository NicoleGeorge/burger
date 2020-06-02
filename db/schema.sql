CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
