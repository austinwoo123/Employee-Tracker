USE employeTracker_DB

INSERT INTO department (name)
VALUE ("Sales"),("Engineering"),("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead",80000,1),("Lead Engineer",150000,2),("Accountant",100000,3),("Lawyer",120000,4),("Software Engineer", 80000,2);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John","Smith",001,1),("Austin", "Woo",002,2),("Justin", "Finley", 003,3),("Peter", "Lee", 004, 4), ("Brandon","Ngo",005,2);

