const connection = require("./db/connection");
const inquirer = require("inquirer");
const consTable = require("console.table");
const asciLogo = require("asciiart-logo");
// const validate = require('./db/index')

connection.connect((err) => {
  if (err) throw err;
  const longText = 'Created By Hardik Rola';
 
console.log(
    asciLogo({
        name: 'Employee Tracker',
        font: 'Star Wars',
        lineChars: 30,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-green',
        textColor: 'green',
    })
    .emptyLine()
    .right('version 1.0')
    .emptyLine()
    .center(longText)
    .render()
);
  promptUser();
});



const promptUser = () => {
  inquirer.prompt([
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
        "Remove Employees",
        "Remove Role",
        "Remove Department",
        "Exit",
      ],
    },
  ]);
};
