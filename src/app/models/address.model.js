module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define(
    "address",
    {
      address_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
      district: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      city_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING(10),
        defaultValue: null,
      },
      phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      tableName: "address",
      timestamps: false,
    }
  );

  return Address;
};
