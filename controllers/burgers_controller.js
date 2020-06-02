const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// eate the router for the app
router.get("/", function(req, res) {
  res.redirect("/burgers");
  burger.all()
  .then(burgerData => {
    console.log(burgers);
    res.render("index", { burgers });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name",
    "devour"
  ], [
    req.body.name,
  ])
  .then(result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    res.redirect("/");
  });
});router.put("/api/cats/:id", function(req, res) {
  
  const data = { devour: req.body.devour === 'true' };
  const condition = { id: req.params.id };

  console.log("condition", condition);


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

router.delete("/burgers/:id", function(req, res) {
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
