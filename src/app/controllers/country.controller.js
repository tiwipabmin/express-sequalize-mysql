const db = require("../models");
const Country = db.country;

// Retrieve all Countries from the database.
exports.findAll = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.send(countries);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving countries.",
    });
  }
};

// Find a single Country with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const country = await Country.findByPk(id);
    if (country) {
      res.send(country);
    } else {
      res.status(404).send({
        message: `Cannot find Country with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Country with id=${id}`,
    });
  }
};

// Delete a Country with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {

    const qres = await Country.destroy({
      where: { country_id: id },
    });
    console.log(`qres: `, qres);

    if (qres == 1) {
      res.send({
        message: "Country was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Country with id=${id}. Maybe Country was not found!`,
      });
    }
  } catch (error) {
    console.log(`error: `, error);
    res.status(500).send({
      message: "Could not delete Country with id=" + id,
    });
  }
};
