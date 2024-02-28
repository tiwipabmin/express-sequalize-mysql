module.exports = (app) => {
  var router = require("express").Router();
  const Auth = require("../../middlewares/auth/auth.controller");

  // simple route
  router.get("/", (req, res) => {
    res.json({
      message: "Welcome to vuejs with expressjs + sequalize application.",
    });
  });

  // simple route
//   router.get("/body", (req, res) => {
//     const body = req.body;
//     console.log(`body: `, body);
//     res.json({ body: body });
//   });

    router.get("/body", Auth.authorize, (req, res) => {
      const body = req.body;
      console.log(`body: `, body);
      res.json({ body: body });
    });

  app.use("/test", router);
};
