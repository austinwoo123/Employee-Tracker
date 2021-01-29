const mysql = require("mysql");
const inquirer = require("inquirer");
// const consoleTable = require("console.table")

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
                viewEmployees();
                break;

            case "View all departments":
                viewDeparments();
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
function viewEmployees()



