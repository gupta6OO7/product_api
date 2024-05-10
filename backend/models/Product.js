const mongoose = require('mongoose')

const { Schema } = mongoose;

const ProductSchema = new Schema({
    Name:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    Featured:{
        type: Boolean
    },
    Rating:{
        type: Number
    },
    Created_At:{
        type: Date,
        required: true
    },
    Company :{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema)