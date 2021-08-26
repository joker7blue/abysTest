const express = require("express");
const db = require("./models");

const authUserRoutes = require("./routes/authUserRoutes");
const authAdminRoutes = require("./routes/admin/authAdminRoutes");

const expensesRoutes = require("./routes/expensesRoutes");
const authExpensesRoutes = require("./routes/admin/expensesRoutes");

// Load .env variables to be accessed through process.env
require("dotenv").config();

//db.sequelize.sync();
//db.sequelize.drop().then(() => console.log('---------- DROP ------'));
db.sequelize.sync({ alter: true }).then(() => {
  console.log("************************* re-sync db. ***************************");
});


const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, userid, userrole");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(express.json());

app.use("/api/auth", authUserRoutes);
app.use("/api/auth/admin", authAdminRoutes);

app.use("/api/expenses", expensesRoutes);
app.use("/api/auth/expenses", authExpensesRoutes);

module.exports = app;
