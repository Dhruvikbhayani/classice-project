const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "Date": { type: Date, required: true },
    "Formno": { type: Number, required: true },
    "Name": { type: String, required: true },
    "DOB": { type: String, required: true },
    "Contact No": { type: Number, required: true },
    "Email": { type: String, required: true },
    "Qualification": { type: String, required: true },
    "Address": { type: String, required: true },
    "Course": { type: String, required: true },
    "Inquiry For": { type: String, required: true },
    "Reference": { type: String, required: true },
    "Note": { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;