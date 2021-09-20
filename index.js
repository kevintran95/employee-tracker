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

                case "View all employees":
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

const viewAllDept = () => {
    const sql = "SELECT * FROM department";
    
    db.query(sql, (err, rows) => {
        console.table(res);
        homePage();
    });
}

const viewAllRoles = () => {
    const sql = "SELECT * FROM role";

    db.query(sql, (err, rows)=> {
        console.table(res);
        homePage();
    });
}

const viewAllEmployees = () => {
    const sql = "SELECT * FROM employee";
    
    db.query(sql, (err, rows) => {
        console.table(res);
        homePage();
    });
}

const addDepartment = () => {
    inquirer 
    .prompt({
        type:'input',
        message:'Enter the department you want to add',
        name:'newDepart'
    }
       .then((reply) => {
           const sql = `INSERT INTO departments (name) VALUE(?) `;
           let newDepart = reply.newDepart;

           db.query(sql, newDepart, (err, rows) => {
               console.log(`${newDepart} department was successfully added `);
               console.log('/n');
               init();
           })
       })
    )
}

const addRole = () => {
    inquirer
    .prompt([
        {
            type:'input',
            message:'Please enter the name of the role',
            name:'newRole'
        },
        {
            type:'input',
            message:'Enter employees salary',
            name:'newSalary'
        },
        {
            type:'input',
            message:'Enter the department ID',
            name:'departments_id'
        }
    ])
    .then((reply) => {
        const sql = 
    })
}





// Listen if port is connected
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);