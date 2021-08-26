require("dotenv").config();

const {Sequelize, DataTypes} = require("sequelize");

// Establish connection to postgresql database
const sequelize = new Sequelize(process.env.POSTGRES_CONNECTION_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {require:true , rejectUnauthorized: false},
  }
});

// Let us test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("++++++++ Connection to database has been established successfully.");
  } catch (error) {
    console.error("------- Unable to connect to the database:", error);
  }
})();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, DataTypes);
db.admin = require("./admin.model")(sequelize, DataTypes);

module.exports = db;
