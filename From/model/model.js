const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    reference: {
        type: String,

    }
})

const user = mongoose.model("users", userschema)

module.exports = user