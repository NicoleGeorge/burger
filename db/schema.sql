CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
