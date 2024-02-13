const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define User schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String, enum: ['Male', 'Female', 'Other'], required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String
    },
    profilePicture: {
        type: String
    },
    education: {
        type: String
    },
    profession: {
        type: String
    },
    religion: {
        type: String
    },
    height: {
        type: Number
    },
    salary:{
        type : Number
    },
});

const user = mongoose.model("user", userSchema);
module.exports = user;

