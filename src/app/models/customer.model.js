module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
    "customer",
    {
      customer_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      store_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
      address_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      create_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      tableName: "customer",
      timestamps: false,
    }
  );

  return Customer;
};
