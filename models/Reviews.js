const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
  var Reviews = sequelize.define("reviews", {
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 10],
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  return Reviews;
};
