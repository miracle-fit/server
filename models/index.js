const Cleaner = require("./Cleaner")
const ShoppingCart = require("./ShoppingCart")
const Users = require("./Users")
const Appointments = require("./Appointments")
const Address = require("./Address")
const Orders = require("./Oders")
const Offers = require("./Offers")
const Services = require("./Services")


Users.hasMany(Appointments)
Users.hasMany(Address)
Appointments.belongsTo(Users)
Appointments.belongsTo(Address)
ShoppingCart.belongsTo(Users)

Orders.belongsTo(Users)

module.exports = {
    Cleaner,
    ShoppingCart,
    Users,
    Address,
    Orders,
    Appointments,
    Offers,
    Services
}