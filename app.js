//dependencies/requirements
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")
//establish connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employeeTracker_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    start()
});
//function that prompts user the options that they can choose from
function start() {
    inquirer.prompt({

        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View all employees",
            "View all departments",
            "View all roles",
            "Update Employee",
            "Add Employee",
            "Add Role",
            "Add Department"
        ]

    }).then(function (answer) {
        switch (answer.choice) {
            case "View all employees":
                viewAllEmployees();
                break;

            case "View all departments":
                viewDepartments();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "Update Employee":
                updateEmployee();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDepartment();
                break;
        }
    })
}
function viewAllEmployees() {
    connection.query("SELECT * FROM employee",
        function (err, res) {
            if (err) throw err
            console.table(res);
            start()
        })

}

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
};

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
    },
    {
        type: "input",
        message: "What is the employee's manager id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the employee's role id",
        name: "roleId"
    },
    ]).then(function (res) {
        //     connection.query

    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department that you would like to add?",
            name: "newDepartment"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO department SET ?", {
            name: answer.newDepartment
        });
        connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the role you wish to add?",
            name: "title"
        },
        {
            type: "number",
            message: "What is the salary of the role?",
            name: "salary"
        },
        {
            type: "number",
            message: "What is the the department ID number?",
            name: "department_id"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO role SET ?", {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.department_id

        });
        connection.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            console.table(res);
            start();
        })
    })
}

function updateEmployee() {

}


