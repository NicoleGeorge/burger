// Import the ORM create the code that will call the ORM functions using burger specific input for the ORM.
const orm = require("../config/orm.js");

const burger = {
  all: function() {
    return orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    return orm.create("burgers", cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update("burgers", objColVals, condition);
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
