const router = require("express").Router()
const { Offers, Users } = require("../models")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")

const OffersSchema = Joi.object({
    title: Joi.string().required(),
    icon: Joi.string().required(),
    quantityOff: Joi.number().required(),
    status: Joi.boolean().required(),
    category: Joi.string().required()
})

router.get("/", async (req, res) => {
    Get.All(Offers, req, res)
})

router.get("/status", async (req, res) => {
    Get.AllWithFilterBoolean(Offers, req, res, "status", true)
})

router.get("/:id", async (req, res) => {
    Get.OneWithInclude(Offers, req, res, [Users])
})

router.post("/", async (req, res) => {
    Post(Offers, req, res, OffersSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(Offers, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Offers, req, res)
})

module.exports = router
