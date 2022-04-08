const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    coursename: { type: String, required: true },
    description: { type: String, required: false },
    durations: { type: Number, required: false },
    fees: { type: String, required: true },

})

var courseModel = mongoose.model("course", courseSchama)

module.exports = courseModel