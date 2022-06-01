const Sequelize = require("sequelize")
const { db } = require('../db')

const Cart = db.define("shopping_cart", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    basePrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    toDo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Cart