const db = require("../models");
const Address = db.address;

// Retrieve all Addresses from the database.
exports.findAll = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.send(addresses);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving addresses.",
    });
  }
};

// Find a single Address with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const address = await Address.findByPk(id);
    if (address) {
      res.send(address);
    } else {
      res.status(404).send({
        message: `Cannot find Address with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Address with id=${id}`,
    });
  }
};

// Delete a Address with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {

    const qres = await Address.destroy({
      where: { address_id: id },
    });
    console.log(`qres: `, qres);

    if (qres == 1) {
      res.send({
        message: "Address was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Address with id=${id}. Maybe Address was not found!`,
      });
    }
  } catch (error) {
    console.log(`error: `, error);
    res.status(500).send({
      message: "Could not delete Address with id=" + id,
    });
  }
};
