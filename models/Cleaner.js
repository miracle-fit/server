const Sequelize = require("sequelize")
const { db } = require('../db')

const Cleaner = db.define("cleaner", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    toDo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Wash Only"
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Cleaner