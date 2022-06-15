const express = require("express");
const productHelper = require("../helpers/product-helper");
const userHelper = require("../helpers/user-helper");
const router = express.Router();

// router.use((req,res,next)=>{
// console.log("Using middleware");
// next();
// })

router.get("/", (req, res) => {
  res.send("user homepage");
});

router.get("/allProduct", (req, res) => {
  productHelper.allProduct().then((response) => {
    res.json(response);
  });
});

router.post("/signup",(req,res)=>{
    userHelper.signup(req.body).then((response)=>{
        res.json(response);
    })
});

router.post("/login",(req,res)=>{ 
  
  userHelper.login(req.body).then((response)=>{
    res.json(response)
  })
})

module.exports = router;
