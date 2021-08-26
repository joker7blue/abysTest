const db = require("./index");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }

  User.init(
    {
      name: DataTypes.STRING,
      userName: {type: DataTypes.STRING, unique: true},
      email: {type: DataTypes.STRING, unique: true, allowNull: false},
      password: DataTypes.STRING,
      blocked: {type: DataTypes.BOOLEAN, defaultValue: false}
    },
    {
      sequelize,
      tableName: "users",
    }
  );

  return User;
};
