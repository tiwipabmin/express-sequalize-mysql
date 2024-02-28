require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const db = require("./src/app/models");

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// app.get("/test", (req, res) => {
//   res.json({
//     message: "Welcome to vuejs with expressjs + sequalize application.",
//   });
// });

// app.get("/test/body", (req, res) => {
//   const body = req.body;
//   res.json({ body: body });
// });

// require("./app/routes/turorial.routes")(app);
require("./src/app/routes/test.routes")(app);
require("./src/app/routes/user.routes")(app);
require("./src/app/routes/customer.routes")(app);
require("./src/app/routes/address.routes")(app);
require("./src/app/routes/city.routes")(app);
require("./src/app/routes/country.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
