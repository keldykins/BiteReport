const Sequelize = require("sequelize");

<<<<<<< HEAD
const sequelize = new Sequelize("rest_reviewsdb", "root", "password", {
=======

const sequelize = new Sequelize("rest_reviewsdb", "root", "M@rif3fa", {


>>>>>>> f526a8046be04296707f1965da617254ec3663aa
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
