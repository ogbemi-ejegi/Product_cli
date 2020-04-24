const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);