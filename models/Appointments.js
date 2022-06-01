const Sequelize = require("sequelize")
const { db } = require("../db")

const Appointments = db.define("appointments", {
    appointmentId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    details: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Appointments
