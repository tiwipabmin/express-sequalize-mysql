module.exports = (app) => {
  const city = require("../controllers/city.controller.js");

  var router = require("express").Router();

  // Retrieve all cities
  router.get("/", city.findAll);

  // Retrieve a single City with id
  router.get("/:id", city.findOne);

  // Delete a City with id
  router.delete("/:id", city.delete);

  app.use("/api/cities", router);
};
