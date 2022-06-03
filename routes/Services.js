const router = require("express").Router()
const { Services, Users } = require("../models")
const Joi = require('joi')
const { Get, Post, Patch, Delete } = require("./routerCreator")

const ServicesSchema = Joi.object({
    title: Joi.string().required(),
    icon: Joi.string().required(),
    status: Joi.boolean().required(),
    category: Joi.string().required()
})

router.get("/", async (req, res) => {
    Get.All(Services, req, res)
})

router.get("/status", async (req, res) => {
    Get.AllWithFilterBoolean(Services, req, res, "status", true)
})

router.get("/:id", async (req, res) => {
    Get.OneWithInclude(Services, req, res, [Users])
})

router.post("/", async (req, res) => {
    Post(Services, req, res, ServicesSchema)
})

router.patch("/:id", async (req, res) => {
    Patch(Services, req, res)
})

router.delete("/:id", async (req, res) => {
    Delete(Services, req, res)
})

module.exports = router
