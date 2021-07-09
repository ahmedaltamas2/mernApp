const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate =  require('../middleware/authenticate');

function accessPermission(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }

router.get('/', (req, res) => {
    accessPermission(res)
    res.send(`Hello world from the server rotuer js`);
});


require('../db/conn');
const User = require("../model/userSchema");


router.post('/register', async (req, res) => {
    accessPermission(res)
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
    accessPermission(res)
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
                res.json({message : "user signin successfully", token : token});
    
            }
        }else{
            res.status(400).json({error : "Invalid Credentials"});

        }
       
    }catch(err){
        console.log(err);
    }
});

     //About us page

   router.get('/about',authenticate,(req,res)=>{
    accessPermission(res)
    
    res.send(req.rootUser); //as req.rootuser contains all data of user logged in
 });


 
 router.get('/logout',authenticate,(req,res)=>{
    accessPermission(res)
    
    sessionStorage.removeItem('token');
    res.status(200).send('User Logout');
 });






module.exports = router;