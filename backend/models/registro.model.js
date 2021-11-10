const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1
    },
    email: {
        type: String,
        required: true,
        min: 1
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('registro', product_schema);