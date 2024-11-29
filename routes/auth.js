const express=require('express');
const router=express.Router();
const authcontroller=require('../controllers/authcontroller');

//route for login
router.post('/login',authcontroller.postLogin);

//route fro register
router.post('/register',authcontroller.postRegister);


module.exports=router;