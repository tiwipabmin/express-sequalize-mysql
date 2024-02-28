module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define(
    "inventory",
    {
      inventory_id: {
        type: Sequelize.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      flim_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      store_id: {
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
      tableName: "inventory",
      timestamps: false,
    }
  );

  return Inventory;
};
