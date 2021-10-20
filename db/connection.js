//MySQL Connection
const mysql = require("mysql2");

//dotenv - https://www.npmjs.com/package/dotenv
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "987654321",
  database: "employees",
});

module.exports = connection;
