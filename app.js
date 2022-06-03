require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const { ip } = require("address")
const { db, Connection } = require("./db")
const Routes = require("./routes")

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

app.use("/users", Routes.Users)
app.use("/appointments", Routes.Appointments)
app.use("/address", Routes.Address)
app.use("/cleaner", Routes.Cleaner)
app.use("/carts", Routes.ShoppingCart)
app.use("/orders", Routes.Oders)
app.use("/offers", Routes.Offers)
app.use("/services", Routes.Services)


app.get("/", (req, res) => {
    res.sendFile("/laundry/jacket.png")
})

Connection(db)

app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT}/`)
    console.log(`http://${ip()}:${PORT}/ \n`)
})