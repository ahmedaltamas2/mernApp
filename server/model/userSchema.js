const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    work: {
         type: String,
        required:true
    },
    password: {
         type: String,
        required:true
    },
    cpassword: {
         type: String,
        required:true
    },
    tokens: [
        {
            token:{
                type: String,
                required:true
            }
        }
    ]
})



//hash the password
//this is a middleware before 'save' in auth i.e line c
userSchema.pre('save', async function(next){
    // console.log("hi");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);

    }
    next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, 'secretkey');//jwt.sign(payload,secretOrPrivateKey)
        this.tokens =  this.tokens.concat({token: token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}




const User = mongooose.model('USER', userSchema);

module.exports = User;






