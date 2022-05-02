const express = require('express')
const app = express()
const session = require('express-session');
app.use(session({ secret: "skill@123", resave: true, saveUninitialized: true, cookie: { maxAge: 60 * 60 * 1000 } }))

exports.session = ((req, res) => {
    req.session = req.body.email
        // req.session = req.body.password
    console.log("hiii")
    console.log(req.session)

})