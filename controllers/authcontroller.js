const { V4 } = require("paseto");
const { User, validateUser } = require('../models/User');
const bcrypt = require("bcrypt");
require('dotenv').config();
const generateKeyPair=require('../util/config');
const validateEmail = require("../util/validateEmail");


//login
exports.postLogin=async(req,res)=>{
    const{Email,Password}=req.body;

    try{
    const user=await User.findOne({Email});

    //if not email found
    if(!user){
        res.status(404).json({message:"Email not exist",success:false})
    }
    //compare password
    const password=bcrypt.compare(user.Password,Password);

    if(!password){
        res.status(400).json({message:"Password is not correct",success:false}) 
    }

    //payload in the token
    const payload = {
        id:user._id,
        Email:user.Email,
        isAdmin:user.isAdmin
      };
      const { privateKey, publicKey } = await generateKeyPair();
      const token = await V4.sign(payload, privateKey, {
        expiresIn: "1h", 
    });

     res.status(200).json({ message:"Login Succesfully",token });
   }
   catch(err){
    console.log(err);
    res.status(500).json({message:"Internal Server Error",success:false})
   }

}

//register
exports.postRegister=async(req,res)=>{
    const{Email,Password, isAdmin}=req.body;

    try{
    //validate the data
    const { error } = validateUser({ Email, Password });
    const valid= await validateEmail(Email);
    console.log(valid)
    if(!valid){
       return res.status(400).json({message:"Email does not exist",success:false}) 
    }

    if (error) {
        return res.status(400).json({ message: error.details[0].message, success: false });
    }
    
    //User with Email
    const user=await User.findOne({Email});
     
    if(user){
       return res.status(400).json({message:"Email already exist",success:false}) 
    }  
     
    //hassed password
    const hashedPass = await bcrypt.hash(Password, 10);
    const newUser = new User({ Email, Password: hashedPass, isAdmin });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", success: true });
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error",success:false})
    }
}


//User page
exports.getUserpage=(req,res)=>{
    res.status(200).json({message:"User page"})
}


//Admin page 
exports.getAdminPage=(req,res)=>{
    res.status(200).json({message:"Admin page"})
}