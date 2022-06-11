const express = require('express');
const productHelper = require('../helpers/product-helper');
const router = express.Router();


// router.use((req,res,next)=>{
// console.log("Using middleware");
// next();
// })



router.get('/',(req,res)=>{
    res.send("user homepage");
})

router.get("/allProduct",(req,res)=>{

    productHelper.allProduct().then((response)=>{
        res.json(response)
    })

})



module.exports = router;