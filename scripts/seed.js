const { Services, Users, Cleaner, Offers } = require("../models")
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


function offer() {
    const offers = ["OFF ON DRY CLEANER", "OFF ON DRY TAILORING"]
    const categoty = ["cleaner", "tailor"]
    const offersIcon = ["/images/offers/2.png", "/images/offers/6.png"]
    const percentages = [20, 40]

    for (let i = 0; i < offers.length; i++) {
        Offers.create({
            title: `${percentages[i]}% ${offers[i]}`,
            quantityOff: percentages[i],
            status: true,
            icon: offersIcon[i],
            category: categoty[i]
        })
    }
}

function service() {
    const services = ["Laundry", "Tailoring"]
    const servicesIcon = ["/images/services/laundry.png", "/images/services/sewing.png"]
    const servicesColor = ["11,83,148", "112,53,17"]
    for (let i = 0; i < services.length; i++) {
        Services.create({
            title: services[i],
            icon: servicesIcon[i],
            color: servicesColor[i],
            status: true,
            category: services[i].toLowerCase()
        })
    }
}


// user()
// cleaner()
offer()
// service()