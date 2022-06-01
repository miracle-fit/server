const Sequelize = require("sequelize")
const { db } = require('../db')

const Address = db.define("address", {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isPrimary: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
})

module.exports = Address