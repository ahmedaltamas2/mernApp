
const jwt = require('jsonwebtoken');
const User= require("../model/userSchema")

const  authenticate=async(req,res,next)=> {
    
    try {
        var headers    =   req.headers;
        var authorization_header    =   headers.authorization;
    var check_head_star         =   authorization_header.substr(0,6);
    if(check_head_star == 'Bearer'){
    var token           =   authorization_header.substr(7);

        console.log("token saa", token);
        const verifyToken=jwt.verify(token,'secretkey');

        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})//we acess token in mongo DB from tokens.token

        if (!rootUser) {
            throw new Error('User not found')
        }
        //storing all data in req.token,req.rootUser,req.userId
        req.token = token;
        req.rootUser=rootUser;//if _id matches then all data gets stored in req.rootuser
         req.userID=rootUser._id;

         next();
    }

    else{
        res.status(401).send('Unauthorized:No token provided')

    }


         
    } catch (error) {
        res.status(401).send('Unauthorized:No token provided')
        console.log(error);
        
    }
   
}

module.exports= authenticate;
