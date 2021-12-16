const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPwd: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Users", userSchema);