const mysql = require("mysql");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "punyanvaa",
  password: "",
});

module.exports = db;
