// Require packages
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const ctable = require('console.table');
const { prompt } = require('inquirer');

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
        });
};

const viewDepart = () => {
    const sql = "SELECT * FROM department";
    
    db.query(sql, (err, rows) => {
        console.table(res);
        homePage();
        
    });
}

const viewRoles = () => {
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
               homePage();
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
        const sql = `INSERT INTO role (title, salary, departments_id) VALUE (?, ?, ?)`;
        reply.departments_id = parseInt(reply.departments_id);
        reply.newSalary = parseInt(reply.newSalary);
        var roleArray = [reply.newRole, reply.newSalary, reply.departments_id];

        db.query(sql, roleArray, (err, rows) => {
            console.log(`${newRole} has been added to roles`);
            homePage();
            addRole();
        });
        
    });
}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            messages:'Enter the employees first name',
            name: 'firstName'
        },
        {
            type:'input',
            message:'Enter the employees last name',
            name: 'lastName'
        },
        {
            type:'input',
            message:'Enter the employees role ID',
            name: 'role'
        },
        {
            type:'input',
            message:'Enter the managers id',
            name: 'manager'
        }
    ])
    .then((reply) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`;
        reply.role = parseInt(reply.role);
        reply.manager = parseInt(reply.manager);
        var roleArray = [reply.firstName, reply.lastName, reply.role, reply.manager];

        db.query(sql, roleArray, (err, rows) => {
            console.log(`${reply.firstName} ${reply.lastName} has been added`);
            
            homePage();
        });
    });
}

const updateRole = () => {
    const sql = `UPDATE employee set role_id = ? WHERE id = ?`;
    var namesArray = [];

    db.query(sql, (err,rows) => {
        console.log(rows);
        for (let i = 0; i < rows.length; i++);
        let name = `${rows[i].firstName} ${rows[i].lastName}`;
        namesArray.push(name);
    })
    inquirer
    .prompt([
        {
            type:'list',
            message:'Select an employee to update',
            name:'name'
        },
        {
            type:'input',
            message:'Please enter new role ID',
            name:'update'
        }
    ])
    .then((reply))
}





// Listen if port is connected
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`),
    homePage()
);


