const express = require('express');
const app = express();

const studentRouter = express.Router();
studentRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + "/form.html");
})

const courseRouter = express.Router()
courseRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + "/course.html")
})
module.exports = { studentRouter, courseRouter }