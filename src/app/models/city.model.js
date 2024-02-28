module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define(
    "city",
    {
      city_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      country_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "city",
      timestamps: false,
    }
  );

  return City;
};
