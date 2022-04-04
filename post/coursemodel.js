const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    coursename: { type: String, required: true },
    description: { type: String, required: true },
    durations: { type: Number, required: true },
    fees: { type: Number, required: true },
})

var courseModel = mongoose.model("course", courseSchama)

module.exports = courseModel