const db = require("./index");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
  }

  Expense.init(
    {
      label: DataTypes.STRING,
      amount: {type: DataTypes.DOUBLE, unique: true},
      dateOperation: {type: DataTypes.DATE, unique: true, allowNull: false},
      mode: DataTypes.STRING,

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: db.user,
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "expenses",
    }
  );

  return Expense;
};
