const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reservations: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema, "users");
module.exports = User;