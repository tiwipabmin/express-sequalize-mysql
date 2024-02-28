const dbConfig = require("../config/db.config.js");
const customer = require("./customer.model.js");
const address = require("./address.model.js");
const city = require("./city.model.js");
const country = require("./country.model.js");
const staff = require("./staff.model.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.customer = customer(sequelize, Sequelize);
db.address = address(sequelize, Sequelize);
db.city = city(sequelize, Sequelize);
db.country = country(sequelize, Sequelize);
db.staff = staff(sequelize, Sequelize);

db.address.hasMany(db.customer, {
  foreignKey: "address_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
db.customer.hasOne(db.address, {
  foreignKey: "address_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
db.city.hasMany(db.address, {
  foreignKey: "city_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
db.address.hasOne(db.city, {
  foreignKey: "city_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
db.country.hasMany(db.city, {
  foreignKey: "country_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
db.city.hasOne(db.country, {
  foreignKey: "country_id",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

module.exports = db;
