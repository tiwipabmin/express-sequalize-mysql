module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define(
    "store",
    {
      store_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      manager_staff_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
      },
      address_id: {
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
      tableName: "store",
      timestamps: false,
    }
  );

  return Store;
};
