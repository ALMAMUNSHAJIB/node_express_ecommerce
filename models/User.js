const { Schema, model } = require("mongoose");


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdnib: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
});


const User = model('User', userSchema);
module.exports = User;