DROP DATABASE IF EXISTS employeTracker_DB;

CREATE DATABASE employeTracker_DB;

USE employeTracker_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCEREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)