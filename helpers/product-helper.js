const Product = require("../models/productModel");

module.exports = {
  addProduct: (productInfo) => {
    return new Promise(async (resolve, reject) => {
      const {
        productCateg,
        ProductName,
        productPrice,
        productDesc,
        productUrl,
      } = productInfo;

      const product = new Product({
        productCateg,
        ProductName,
        productPrice,
        productDesc,
        productUrl,
      });
      const insertedProduct = await product.save();
      if (insertedProduct) {
        console.log("Product added", insertedProduct._id);
        resolve(insertedProduct);
      } else {
        console.log("Product couldn't add");
      }
    });
  },

  allProduct : ()=>{
    return new Promise(async(resolve,reject)=>{
    const allProducts =  await Product.find({});
     if(allProducts){
      resolve(allProducts)
     }  else{
      console.log("Couldn't get products");
     }
  })
  }
};
