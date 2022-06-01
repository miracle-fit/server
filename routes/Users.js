const router = require("express").Router()
const Users = require("../models/Users")
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UsersSchema = Joi.object({
    fullName: Joi.string().min(2).required(), // 564573658
    email: Joi.string().trim().email(),
    password: Joi.string().min(6).alphanum().required(),
    phone: Joi.string().min(10).required()
})


router.get("/", async (req, res) => {
    await Users.findAll().then((Users) => {
        res.json({
            status: 200,
            Users
        })
    }).catch((err) => {
        res.send(err)
    })
})

router.get("/:id", async (req, res) => {
    await Users.findByPk(req.params.id).then((User) => {
        res.json({
            status: 200,
            User
        })
    }).catch((err) => {
        res.send(err)
    })
})

router.post("/", async (req, res) => {
    await UsersSchema.validateAsync(req.body).then(async () => {
        const Email = await Users.findOne({ where: { email: req.body.email } })
        const salt = await bcrypt.genSalt(10)
        const { fullName, email, password, phone } = req.body
        const hashPassword = await bcrypt.hash(password, salt)

        if (Email) {
            return res.json({
                error: "This email already exist",
                email: Email.email
            })
        }

        await Users.create({
            fullName,
            email,
            password: hashPassword,
            phone
        }).then((User) => {
            res.json({
                status: 200,
                User
            })
        })
    }).catch((err) => {
        res.json({
            error: true,
            err
        })
    })
})

router.put("/:id", async (req, res) => {
    await Users.findOne({ where: { id: req.params.id } }).then(async (User) => {
        await UsersSchema.validateAsync(req.body).then(async () => {
            const { first_name, last_name, email, password, dob, phone } = req.body
            const Email = await Users.findOne({ where: { email } })
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            if (Email && User.email !== email) {
                return res.json({
                    error: "This email already exist",
                    email: Email.email
                })
            }

            await User.update({
                first_name,
                last_name,
                email,
                password: hashPassword,
                dob,
                phone
            }).then((User) => {
                res.json({
                    status: 200,
                    User
                })
            })
        }).catch((err) => {
            res.send(err)
        })
    })
})

router.delete("/:id", async (req, res) => {
    await Users.findOne({ where: { id: req.params.id } }).then((User) => {
        if (User) {
            User.destroy().then(() => {
                res.json({
                    status: 200,
                    message: "user deleted succefully"
                })
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.json({
                status: 400,
                message: "this user does not exist"
            })
        }
    }).catch((err) => {
        res.send(err)
    })

})


module.exports = router