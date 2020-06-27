CREATE DATABASE burgers_db if not exists;
USE burgers_db;

drop table if exists burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(25) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

