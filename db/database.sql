CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES (1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);