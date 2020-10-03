const Sequelize = require("sequelize");

const sequelize = new Sequelize('rest_reviewsdb', 'root', 'Rockies_01', { host: 'localhost', port: 3306, dialect: 'mysql'});

module.exports = sequelize;
