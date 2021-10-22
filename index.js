const connection = require("./db/connection");
const inquirer = require("inquirer");
const consTable = require("console.table");
const asciLogo = require("asciiart-logo");
// const validate = require('./db/index')

connection.connect((err) => {
  if (err) throw err;
  const longText = "Created By Hardik Rola";

  console.log(
    asciLogo({
      name: "Employee Management System",
      font: "Star Wars",
      lineChars: 3,
      padding: 2,
      margin: 3,
      borderColor: "grey",
      logoColor: "bold-green",
      textColor: "green",
    })
      .emptyLine()
      .right("version 1.0")
      .emptyLine()
      .center(longText)
      .render()
  );
  promptUser();
});

const promptUser = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "Please select an option:",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "View All Employees By Department",
          "View Department Budgets",
          "Update Employee Role",
          "Update Employee Manager",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Remove Employee",
          "Remove Role",
          "Remove Department",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === "View All Employees") {
        viewAllEmployees();
      }
      if (choices === "View All Roles") {
        viewAllRoles();
      }
      if (choices === "View All Departments") {
        viewAllDepartment();
      }
      if (choices === "View All Employees By Department") {
        viewEmployeeByDepartment;
      }
      if (choices === "View Department Budgets") {
        viewDepartmentBudget();
      }
      if (choices === "Update Employee Role") {
        updateEmployeeRole();
      }
      if (choices === "Update Employee Manager") {
        updateEmployeeManager();
      }
      if (choices === "Add Employee") {
        addEmployee();
      }
      if (choices === "Add Role") {
        addRole();
      }
      if (choices === "Add Department") {
        addDepartment();
      }
      if (choices === "Remove Employee") {
        removeEmployee();
      }
      if (choices === "Remove Role") {
        removeRole();
      }
      if (choices === "Remove Department") {
        removeDepartment();
      }
      if (choices === "Exit") {
        connection.end();
      }
    });
};

// VIEW ALL EMPLOYEES
const viewAllEmployees = () => {
  let sql = `SELECT * FROM employees`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.table(response);
    promptUser();
  });
};

//VIEW ALL ROLES
const viewAllRoles = () => {
  const sql = `SELECT role.id, role.title, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    response.forEach((role) => {
      console.log(role.title);
    });
    promptUser();
  });
};

//VIEW ALL DEPARTMENTS
const viewAllDepartment = () => {
  let sql = ``;
};

// VIEW ALL EMPLOYEES BY DEPARTMENT
const viewEmployeeByDepartment = () => {
  let sql = ``;
};

//VIEW DEPARTMENT BY BUDGETS
const viewDepartmentBudget = () => {
  let sql = ``;
};

//UPDATE AN EMPLOYEE'S ROLE
const updateEmployeeRole = () => {
  let sql = ``;
};

//UPDATE AN EMPLOYEE'S MANAGER
const updateEmployeeManager = () => {
  let sql = ``;
};

// ADD A NEW EMPLOYEE
const addEmployee = () => {
  let sql = ``;
};

//ADD A NEW ROLE
const addRole = () => {
  let sql = ``;
};

//ADD A NEW DEPARTMENT
const addDepartment = () => {
  let sql = ``;
};

//DELETE AN EMPLOYEE
const removeEmployee = () => {
  let sql = `SELECT employees.id, employees.first_name, employees.last_name FROM employees`;

  connection.query(sql, (error, response) => {
    if (error) throw error;
    let employeeNamesArray = [];
    response.forEach((employees) => {
      employeeNamesArray.push(`${employees.first_name} ${employees.last_name}`);
    });

    inquirer
      .prompt([
        {
          name: "chosenEmployee",
          type: "list",
          message: "Which employee would you like to remove?",
          choices: employeeNamesArray,
        },
      ])
      .then((answer) => {
        let employeeId;

        response.forEach((employees) => {
          if (
            answer.chosenEmployee ===
            `${employees.first_name} ${employees.last_name}`
          ) {
            employeeId = employees.id;
          }
        });

        let sql = `DELETE FROM employees WHERE employees.id = ?`;
        connection.query(sql, [employeeId], (error) => {
          if (error) throw error;
          console.log(`Employee Successfully Removed`);
          viewAllEmployees();
        });
      });
  });
};

//DELETE AN ROLE
const removeRole = () => {
  let sql = ``;
};

//DELETE AN DEPARTMENT
const removeDepartment = () => {
  let sql = ``;
};
