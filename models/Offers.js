const Sequelize = require("sequelize")
const { db } = require("../db")

const Orders = db.define("offers", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantityOff: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Orders
