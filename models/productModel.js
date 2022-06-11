const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productCateg : {type:String,required :true},
    ProductName : {type:String, required:true},
    productPrice:{type:String, required:true},
    productDesc : {type:String,required:true},
    productUrl : {type:String,required:true}
})

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;