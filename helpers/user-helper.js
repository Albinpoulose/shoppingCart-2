const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//const jwt = require("jsonwebtoken")

module.exports = {
  signup: (userDetails) => {
    let { name, email, password } = userDetails;

    return new Promise(async (resolve, reject) => {
      const saltRounds = 10;
     // console.log(name, email, password);
      bcrypt.hash(password, saltRounds, function (err, hash) {
        console.log(hash); 
        if (!err) {
          password = hash;
          const user = new User({
            name,
            email,
            password,
          });
          // console.log(password);
          user.save().then((insertedUser) => {
            if (!insertedUser) {
              reject("User could not created");
            } else {
              resolve(insertedUser);
            }
          });
        } else {
          console.log(err);
          reject("Could not generate HASH");
        }
      });
    });
  },

  login: (userDetails) => {
    const {email,password} = userDetails ;
    
    return new Promise(async(resolve ,reject)=>{
        const userExist= await User.findOne({email:email}).exec();
        if(!userExist){
            console.log("Invalid Credentials");
           // reject("Invalid Credentials")
        }else{
            //   console.log("Matching email found"); 
            //   console.log(emailExist);

            const match = await bcrypt.compare(password,userExist.password)
               if(!match){
               console.log("Passowrds Do not match");
                //reject("")
               }else{ 
                console.log("Login sucess");
                // console.log(userExist._id.toString());
                //const token = jwt.sign(userExist._id.toString(),process.env.SECRETKEY)
               // console.log("token ",token);
               
                resolve(userExist); 
                
               }
        }

    })
  },
};
