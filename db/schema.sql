DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;

-- Department Table Definition --
CREATE TABLE department (
  id INT NOT NULL
    AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

-- Role Table Definition --
CREATE TABLE role (
  id INT NOT NULL 
    AUTO_INCREMENT,
  title VARCHAR(30),
  salary TEXT,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Employee Table Definition --
CREATE TABLE employee (
  id INT NOT NULL
    AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);