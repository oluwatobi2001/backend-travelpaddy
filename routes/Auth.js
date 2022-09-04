const bodyParser = require("body-parser");

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Router } = require("express");

router.post("/register",  async(req, res) => {
    try {
const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash(req.body.password, salt);
const newUser = new User({
   
    FullName: req.body.FullName,
    username: req.body.username,
   
    email: req.body.email,
    password: hashedPass,
 
});
const user = await newUser.save();
res.status(200).json(user);
    } catch(err) {
        
        res.status(500).json(err)
    }

})

router.post("/login", async(req, res, next) => {
    try {
        const user = await User.findOne({username : req.body.username })   ;

        if(!user) { res.status(402).json("wrong credentials");
        } else {
          const validate = await bcrypt.compare(req.body.password, user.password); 
             if(validate) {
                   const {password, ...others} = user._doc;
       
        res.status(200).json(others)
             }    else {
             res.status(401).json("wrong username/password "); 

        }
      
        }
             
             
      
    

      
     
    } 
    catch(err) {
        next(err);
    }
} )




module.exports = router;