const Sequelize = require("sequelize")
const { db } = require("../db")

const Orders = db.define("orders", {
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    products: {
        type: Sequelize.JSONB,
        allowNull: false
    },
    isAOrder: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Orders
