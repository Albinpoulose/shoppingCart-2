const express = require('express');
const productHelper = require('../helpers/product-helper');

const router = express.Router();

// middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
//   })


// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
  }) 

router.post("/addProduct",(req,res)=>{
  //console.log(req.body);
  productHelper.addProduct(req.body)
  res.json({sucess:true});
})


  module.exports = router
