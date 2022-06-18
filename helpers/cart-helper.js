const Cart = require("../models/cartModel");

module.exports = {
  addToCart: (info) => {
    //console.log(info);
    const { userId, productId } = info;

    return new Promise(async () => {
      const cartExist = await Cart.findOne({ cartId: userId });

      if (cartExist) {
        console.log("Cart Exist", cartExist);
        const sucess = await Cart.findOneAndUpdate(
          { cartid: userId },
          { $push: { products: productId } }
        );
        console.log(sucess);
      } else {
        console.log("cart dose not exist");
        const cart = new Cart({
          cartId: userId,
          products: productId,
        });
        const insertedCart = await cart.save();
        if (insertedCart) {
          console.log("cart inserted ", insertedCart);
        } else {
          console.log("operation faild");
        }
      }
    });
  },
};
