const db = require("./index");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
  }

  Admin.init(
    {
      userName: {type: DataTypes.STRING, unique: true, allowNull: false},
      phoneNumber: {type: DataTypes.STRING, unique: true, allowNull: false},
      password: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "admins",
    }
  );

  return Admin;
};
