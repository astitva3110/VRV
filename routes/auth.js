const express=require('express');
const router=express.Router();
const authcontroller=require('../controllers/authcontroller');
const isLogin=require('../middleware/isLogin');
const isAdmin=require('../middleware/isAdmin')

//route for login
router.post('/login',authcontroller.postLogin);

//route fro register
router.post('/register',authcontroller.postRegister);

//userpage
router.get('/user',isLogin,authcontroller.getUserpage);

//admin page
router.get('/admin',[isLogin,isAdmin],authcontroller.getAdminPage);


module.exports=router;