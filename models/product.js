


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    precio: {
        type: Number,
        required: true
    },
    categoria : {
        type: Array
    },
    vegan: {
        type: Boolean
    },
    image: {
        type: String
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;