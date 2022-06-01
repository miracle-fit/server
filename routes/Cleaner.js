const router = require("express").Router()
const Cleaner = require("../models/Cleaner")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")

const CleanersSchema = Joi.object({
    name: Joi.string().required(),
    toDo: Joi.string().optional(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    category: Joi.string().required()
})

router.get("/", async (req, res) => {
    Get.All(Cleaner, req, res)
})

router.get("/:id", async (req, res) => {
    Get.One(Cleaner, req, res)
})

router.post("/", async (req, res) => {
    Post(Cleaner, req, res, CleanersSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(Cleaner, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Cleaner, req, res)
})

module.exports = router