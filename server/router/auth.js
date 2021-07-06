const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});


require('../db/conn');
const User = require("../model/userSchema");


router.post('/register', async (req, res) => {
  
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "please fill the full form"});
    } 

    try{
        const userExist = await  User.findOne({email : email});

        if(userExist){
            return res.status(422).json({ error : "Email already Exist"});
        }else if(password != cpassword){
            return res.status(422).json({ error : "Email already Exist"});

        }else{
            const user = new User({name,email,phone,work,password,cpassword});

            //line c
            await user.save();

            res.status(201).json({ message : "user registered successfully"});
        }

    }catch(err){
        console.log(err);
    }

});

router.post('/signin', async (req,res) => {
    try{
        const { email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"})
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            
            const token = await userLogin.generateAuthToken();
            console.log(token);

            if(!isMatch){
                res.status(400).json({error : "Invalid Credentials"})
            }else{
                res.json({message : "user signin successfully"});
    
            }
        }else{
            res.status(400).json({error : "Invalid Credentials"});

        }

      


       

    }catch(err){
        console.log(err);
    }
})

module.exports = router;