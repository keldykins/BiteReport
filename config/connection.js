const Sequelize = require("sequelize");

const sequelize = new Sequelize("rest_reviewsdb", "root", "M@rif3fa", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
