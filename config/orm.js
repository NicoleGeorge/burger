// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  
  all: function(table) {
    var queryString = "SELECT * FROM ??";
    return connection.query(queryString, [table]);
  },
  
  create: function(table, cols, vals) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    return connection.query(queryString, [table, cols, vals]);
  },
  

  update: function(table, objColVals, condition) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    return connection.query(queryString, [table, objColVals, condition])
  },
  

  delete: function(table, condition) {
    var queryString = "DELETE FROM ?? WHERE ?";
    return connection.query(queryString, [table, condition]);
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
