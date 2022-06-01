const {Sequelize} = require("sequelize")

const db = new Sequelize({
    database: "alteration",
    dialect: "postgres",
    username: "postgres",
    password: "Alicia01"
})

// const db = new Sequelize("postgres://jqrnvgqielodld:92b781fff405554a0e8e32096ac00382987769823dc4a3437e3b3b611b9312fe@ec2-54-88-130-244.compute-1.amazonaws.com:5432/dkv60g6tea8gp")

const Connection = (db) => {
    try {
        db.authenticate()
        db.sync()
        console.log('\nConnection has been established successfully.\n');

    } catch (error) {
        console.error(`\nUnable to connect to the database: ${error}\n`);
    }
}

module.exports = {
    db,
    Connection
}