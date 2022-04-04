const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const studSchama = new mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    date: { type: String, require: true },
    Formno: { type: Number, require: true },
    dob: { type: String, require: true },
    qualification: { type: String, require: true },
    email: { type: String, require: true },
    Courses: { type: String, required: true },
    address: { type: String, require: true },
    courses: { type: String, require: true },
    reference: { type: String, require: true },
    inquiry_for: { type: String, require: true },
    notes: { type: String, require: true },
})

var studModel = mongoose.model("inqui", studSchama)

module.exports = studModel