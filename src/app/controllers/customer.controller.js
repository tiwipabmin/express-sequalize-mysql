const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;

// Retrieve all Customers from the database.
exports.findAll = async (req, res) => {
  try {
    // console.log(`req.query: `, req.query.statements);
    // const statements = req.query.statements ?? null;
    // console.log(`statements: `, statements);
    // let customers = {};

    // if (statements) {
    //   customers = await Customer.findAll();
    //   console.log(`customers: `, customers);
    // } else {
    //   customers = await Customer.findAll({ where: "" });
    // }
    const customers = await Customer.findAll();
    console.log(customers)
    res.send(customers);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving customers.",
    });
  }
};

// Find a single Customer with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await Customer.findByPk(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(404).send({
        message: `Cannot find Customer with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Customer with id=${id}`,
    });
  }
};
