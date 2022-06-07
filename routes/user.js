const express = require('express');
const router = express.Router();


router.use((req,res,next)=>{
console.log("Using middleware");
next();
})



router.get('/',(req,res)=>{
    res.send("user homepage");
})




module.exports = router;