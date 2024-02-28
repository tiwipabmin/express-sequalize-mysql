const db = require("../models");
const City = db.city;

// Retrieve all cities from the database.
exports.findAll = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.send(cities);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving cities.",
    });
  }
};

// Find a single City with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const city = await City.findByPk(id);
    if (city) {
      res.send(city);
    } else {
      res.status(404).send({
        message: `Cannot find City with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving City with id=${id}`,
    });
  }
};

// Delete a City with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {

    const qres = await City.destroy({
      where: { city_id: id },
    });
    console.log(`qres: `, qres);

    if (qres == 1) {
      res.send({
        message: "City was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete City with id=${id}. Maybe City was not found!`,
      });
    }
  } catch (error) {
    console.log(`error: `, error);
    res.status(500).send({
      message: "Could not delete City with id=" + id,
    });
  }
};
