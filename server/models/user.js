const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:   String, 
        required:   true
    },
    email: {
        type:   String,
        required:   true,
        unique: true
    },
    password: {
        type:   String,
        required: true
    },
    amount: {
        type: Number,
        default: 0.00,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;