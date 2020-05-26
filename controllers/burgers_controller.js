const express = require("express");

const router = express.Router();

// import the following:

// Express
// burger.js

const burger = require("../models/burger.js");

// eate the router for the app
router.get("/", function(req, res) {
  burger.all()
  .then(burgers => {
    console.log(burgers);
    res.render("index", { burgers });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name",
  ], [
    req.body.name,
  ])
  .then(result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

  burger.update(data, condition)
  .then(result => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });

router.delete("/api/burgers/:id", function(req, res) {
  var condition = { id: req.params.id };

  burger.delete(condition)
  .then(result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
