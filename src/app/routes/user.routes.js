module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Sing in
  router.post("/sign-in", user.signIn);

  app.use("/api/user", router);
};
