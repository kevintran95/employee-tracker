SELECT * FROM company_db;

-- Query to render all departments -- 
SELECT * FROM departments;

-- Query to render all roles --
SELECT * FROM role;

-- Query to render all employees --
SELECT * FROM employee;

-- Query to add departments -- 
INSERT INTO departments (departments_name)
VALUES (?);

-- Query to add a role --
INSERT INTO role (title, salary, departments_id)
VALUE (?, ?, ?);

-- Query to add an employee --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE (?, ?, ?, ?);

-- Query to update an employee --
UPDATE employee set role_id = ? WHERE id = (?);
