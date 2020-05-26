// Import the ORM create the code that will call the ORM functions using burger specific input for the ORM.
const orm = require("../config/orm.js");

const burger = {
  all: function() {
    return orm.all("burgers");
  },

  create: function(cols, vals) {
    return orm.create("burgers", cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update("burgers", objColVals, condition);
  },
  delete: function(condition) {
    return orm.delete("burgers", condition)
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
