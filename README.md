# Employee-Tracker

## Description
My task was to create an interace that will make it easy for non-developers to view and interact with information sored in databases. I built a employee tracker application that helps manage a company's employees using node, inquirer, and MySQL.


## Table of Contents
1. [Description](#description)
2. [Walkthrough Video](#Walkthrough-video)
3. [Installation](#Installation)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Questions](#Questions)
9. [Acknowledgements](#acknowledgements)

## Walkthrough Video
[Link to walkthrough video](https://drive.google.com/file/d/1zoU454uTZLr97myp_jSH_QIW4vGUfhkf/view)

## Installation
First, branch the Github Repo and clone the repo to your local machine. Next, install project dependecies by typing "npm install" into your gitbash terminal. Finally type "node app.js" to run the application through gitbash terminal and respond to the prompts.

## Code Snippet
```
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
```
This code shows how I am using the inquirer npm package to prompt the user into choosing an option from a list of choices. Each choice that they choose will execute a function that will either display, add, or update the data from the MySQL database.

```
USE employeeTracker_DB;

INSERT INTO department (name)
VALUE ("Sales"),("Engineering"),("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead",80000,1),("Lead Engineer",150000,2),("Accountant",100000,3),("Lawyer",120000,4),("Software Engineer", 80000,2);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Smith",001,1),("Austin", "Woo",002,2),("Justin", "Finley", 003,3),("Peter", "Lee", 004, 4), ("Brandon","Ngo",005,2);

```
This code shows how I inserted values into each of the tables from the schema.sql file. This code is from my seed.sql file. I wrote the values in an alternative way where I am able to put the values of each of the tables in one line.

## Built with
- Node
- Gitbash
- Inquirer 
- MySQL

## Licenses
MIT License

## Author
   Austin Woo

## Questions

- For any questions related to this application, please contact me at: austinwoo123@gmail.com or visit my Github Profile here: https://github.com/austinwoo123
  
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp
