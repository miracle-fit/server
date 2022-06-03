const router = require("express").Router()
const { Orders, Users } = require("../models")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")

const OrdersSchema = Joi.object({
    total: Joi.number().required(),
    status: Joi.string().required(),
    products: Joi.array().required(),
    userId: Joi.number().required()
})

router.get("/", async (req, res) => {
    Get.AllWithInclude(Orders, req, res, [Users])
})

router.get("/user/:id", async (req, res) => {
    Get.AllWithFilter(Orders, req, res, "userId", [Users])
})

router.get("/:id", async (req, res) => {
    Get.OneWithInclude(Orders, req, res, [Users])
})

router.post("/", async (req, res) => {
    // Post(Orders, req, res, OrdersSchema)
    OrdersSchema.validateAsync(req.body).then(async (bag) => {
        const { total, status, products, userId } = bag
        if (bag) {
            await Orders.create({
                orderId: `${Date.now()}`,
                total,
                status,
                products,
                userId
            }).then((data) => {
                res.json({
                    status: 200,
                    error: false,
                    data
                })
            }).catch((err) => {
                res.json({
                    error: true,
                    message: err
                })
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})

router.patch("/:id", async (req, res) => {
    Patch(Orders, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Orders, req, res)
})

module.exports = router