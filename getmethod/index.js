const express = require('express')
const app = express()
const mongoose = require("mongoose")
    // const bodyparser = require("bodyparser")
const user = require("./studentschema")
const data = require("./studentdata")
    // const studentrouter = require("./stdent/inquiry")
    // app.use(bodyparser.json())

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/from", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/student", (req, res) => {
    const result = user.insertMany(data.user)
    res.send(result)
        // const user1 = new user(req.query)
        // user1.save().then((data) => console.log(data))

    // res.send(result)
})

app.listen(5555, () => {
    console.log("server is  run")
})