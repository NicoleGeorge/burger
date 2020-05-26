// Import MySQL connection.
const connection = require("../config/connection.js");


// Object for all our SQL statement functions.
const orm = {
  
  all: function(table) {
    const queryString = "SELECT * FROM ??";
    return connection.query(queryString, [table]);
  },
  
  create: function(table, cols, vals) {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    return connection.query(queryString, [table, cols, vals]);
  },
  

  update: function(table, objColVals, condition) {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    return connection.query(queryString, [table, objColVals, condition])
  },
  

  delete: function(table, condition) {
    const queryString = "DELETE FROM ?? WHERE ?";
    return connection.query(queryString, [table, condition]);
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
