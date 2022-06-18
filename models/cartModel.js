const mongoose = require("mongoose");

const CartSchema  = mongoose.Schema({
    cartId : {type:String},
    products :[
        {
            type: mongoose.Schema.Types.ObjectId, ref:"Product"
        }
    ]
})

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart ;