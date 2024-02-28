module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define(
    "staff",
    {
      staff_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
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
      address_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        defaultValue: Sequelize.NOW,
      },
      picture: {
        type: Sequelize.BLOB,
        defaultValue: null,
      },
      email: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
      store_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      username: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(40).BINARY,
        defaultValue: null,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    },
    {
      tableName: "staff",
      timestamps: false,
    }
  );

  return Staff;
};
