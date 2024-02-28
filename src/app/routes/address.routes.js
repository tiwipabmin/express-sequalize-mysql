module.exports = (app) => {
  const address = require("../controllers/address.controller.js");

  var router = require("express").Router();

  // Retrieve all Addresses
  router.get("/", address.findAll);

  // Retrieve a single Address with id
  router.get("/:id", address.findOne);

  // Delete a Address with id
  router.delete("/:id", address.delete);

  app.use("/api/addresses", router);
};
