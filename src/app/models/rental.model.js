module.exports = (sequelize, Sequelize) => {
  const Rental = sequelize.define(
    "rental",
    {
      rental_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rental_date: {
        type: Sequelize.DATE.UNSIGNED,
        allowNull: false,
      },
      inventory_id: {
        type: Sequelize.MEDIUMINT.UNSIGNED,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      return_date: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      staff_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "rental",
      timestamps: false,
    }
  );

  return Rental;
};
