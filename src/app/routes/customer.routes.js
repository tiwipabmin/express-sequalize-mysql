module.exports = (app) => {
  const customer = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Retrieve all Customers
  router.get("/", customer.findAll);

  // Retrieve a single Customer with id
  router.get("/:id", customer.findOne);

  app.use("/api/customers", router);
};
