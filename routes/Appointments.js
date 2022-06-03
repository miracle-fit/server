const router = require("express").Router()
const { Appointments, Address, Users } = require("../models")
const Joi = require('joi')
const moment = require("moment")
const { Get, Post, Patch, Delete } = require("./routerCreator")


const AppointmentsSchema = Joi.object({
    appointmentId: Joi.string().required(),
    fullName: Joi.string().required(),
    details: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    status: Joi.string().required(),
    userId: Joi.number().required(),
    addressId: Joi.number().required(),
})

router.get("/", (req, res) => {
    Get.AllWithInclude(Appointments, req, res, [Address, Users])
})

router.get("/:id", (req, res) => {
    Get.OneWithInclude(Appointments, req, res, [Address, Users])
})

router.get("/user/:id", async (req, res) => {
    Get.AllWithFilter(Appointments, req, res, "userId", [Users])
})

router.post("/", async (req, res) => {
    Post(Appointments, req, res, AppointmentsSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(Appointments, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Appointments, req, res)
})

module.exports = router