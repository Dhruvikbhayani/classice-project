const express = require('express')
const user = require('../model/model')
const router = express.Router()
const controller = require('../controller/controller')

const mongoose = require('mongoose')

const connections = mongoose.connect("mongodb://localhost:27017/data").then(() => {
    console.log("connections sucess")
}).catch(e => { console.log(e) })

router.post('/signup', controller.singup)
router.post('/login', controller.login)
router.put("/update", controller.update)
router.delete("/delete", controller.delete)

module.exports = router