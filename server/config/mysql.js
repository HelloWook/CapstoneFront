require("dotenv").config({ path: "../.env" });
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "smartflower",
});

module.exports = connection;
