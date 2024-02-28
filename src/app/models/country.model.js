module.exports = (sequelize, Sequelize) => {
  const Country = sequelize.define(
    "country",
    {
      country_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "country",
      timestamps: false,
    }
  );

  return Country;
};
