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
app.use(express.urlencoded({ extended: true}));

// Connection for database 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'company_db'
},
        console.log("connected to company_db database")
);