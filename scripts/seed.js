const { ShoppingCart, Users, Cleaner } = require("../models")
const { faker } = require('@faker-js/faker')

function user() {
    for (let i = 0; i < 5; i++) {
        Users.create({
            fullName: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phone: faker.phone.phoneNumber("##########")
        })
    }
}

function cleaner() {
    const cleaners = [
        { name: "T-Shirt", image: "tshirt.png" },
        { name: "Jacket", image: "jacket.png" },
        { name: "Trouser", image: "trouser.png" },
        { name: "Jean", image: "jean.png" },
    ]

    for (let i = 0; i < cleaners.length; i++) {
        Cleaner.create({
            name: cleaners[i].name,
            toDo: "Wash Only",
            price: 10,
            image: cleaners[i].image,
            category: "men"
        })
    }
}


// user()
// cleaner()