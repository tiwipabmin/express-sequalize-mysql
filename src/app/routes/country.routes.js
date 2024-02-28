module.exports = (app) => {
  const country = require("../controllers/country.controller.js");

  var router = require("express").Router();

  // Retrieve all countries
  router.get("/", country.findAll);

  // Retrieve a single Country with id
  router.get("/:id", country.findOne);

  // Delete a Country with id
  router.delete("/:id", country.delete);

  app.use("/api/countries", router);
};
