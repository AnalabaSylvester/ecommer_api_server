const { default: mongoose } = require("mongoose")

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
        trim: true,
    },

    phone: {
        require: true,
        type: String,
        trim: true,
    },
    passwors: {
        require: true,
        type: String,

    },
});
const User = mongoose.model("User", userSchema)
module.exports = User;
