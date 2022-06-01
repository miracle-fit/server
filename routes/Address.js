const router = require("express").Router()
const { Address } = require("../models")
const Users = require("../models/Users")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")


const AddressSchema = Joi.object({
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipcode: Joi.string().required(),
    isPrimary: Joi.boolean().required(),
    userId: Joi.number().required(),
})

router.get("/", async (req, res) => {
    Get.All(Address, req, res)
})

router.get("/:id", async (req, res) => {
    Get.One(Address, req, res)
})

router.post("/", async (req, res) => {
    Post(Address, req, res, AddressSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(Address, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Address.req, res)
})


module.exports = router