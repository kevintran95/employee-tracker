// Require packages
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const ctable = require('console.table');

// Init express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connection to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Mysql username
        user: 'root',
        // Mysql password
        password: 'password',
        database: 'company_db'
    },
    console.log(`connected to company_db database.`)
);

function homePage() {
    inquirer
        .prompt({
            type: 'list',
            name: 'homePage',
            message: 'Please select one of the following',
            choices: ["View all departments",
                "View all roles",
                " View all employees",
                'Add Departments',
                'Add Roles',
                'Add Employees',
                'Update Role',
            ]
        })
        .then(function (selected) {
            switch (selected.homePage) {
                case "View all departments":
                    viewDepart();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "View all emplyoees":
                    viewEmployee();
                    break;

                case "Add Departments":
                    addDepartment();
                    break;

                case "Add Roles":
                    addRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Role":
                    updateRole();
                    break;
            }
        })
}






// Listen if port is connected
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});