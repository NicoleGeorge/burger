// Setting up the code to connect NODE to MySQL.
var mysql = require("mysql");
var util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "ferris88",
  database: "burgers_db"
});

// Making connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
