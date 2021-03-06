const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function (sequelize, DataTypes) {
var Reviews = sequelize.define("Reviews", {
    restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100],
        }
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100],
        }
    },
    item_price: {
        type: DataTypes.INTEGER
    },
    rating:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    review: {
    type: DataTypes.TEXT,
    allowNull: false,
        len: [1],
    },
});

    return Reviews;
};
