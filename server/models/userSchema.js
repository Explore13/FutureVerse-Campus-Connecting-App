const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    //  it is nothing but the student roll number
    userId: {
        type: String,
        required: [true, 'A user must have a user id'],
        unique: true,
        trim: true,
        maxlength: [12, 'A user id must have less or equal then 40 characters'],
    },
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        trim: true,
    },
    department: {
        type: String,
        required: [true, 'A user must have a department'],
        trim: true,
    },
    phNo: {
        type: Number,
        required: [true, 'A user must have a phone number'],
        unique: true,
        trim: true,
    },
    graduationYear: {
        type: Number,
        required: [true, 'A user must have a phone number'],
        trim: true,
        maxlength: [4, 'A graduation year must have less or equal then 4 characters'],
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;