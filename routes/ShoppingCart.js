const router = require("express").Router()
const { ShoppingCart, Users } = require("../models")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")

const CartSchema = Joi.object({
    name: Joi.string().required(),
    toDo: Joi.string().required(),
    price: Joi.number().required(),
    basePrice: Joi.number().required(),
    category: Joi.string().required(),
    userId: Joi.number().required()
})

router.get("/", async (req, res) => {
    Get.AllWithInclude(ShoppingCart, req, res, [Users])
})

router.get("/user/:id", async (req, res) => {
    Get.AllWithFilter(ShoppingCart, req, res, "userId", [Users])
})

router.get("/:id", async (req, res) => {
    Get.OneWithInclude(ShoppingCart, req, res, [Users])
})

router.post("/", async (req, res) => {
    Post(ShoppingCart, req, res, CartSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(ShoppingCart, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(ShoppingCart, req, res)
})

module.exports = router