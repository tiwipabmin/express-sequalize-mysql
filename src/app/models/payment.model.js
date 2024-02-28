module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define(
    "payment",
    {
      payment_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
      },
      staff_id: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
      },
      rental_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      amount: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      last_update: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      tableName: "payment",
      timestamps: false,
    }
  );

  return Payment;
};
