const express=require('express');
const helmet=require('helmet');
const app=express();
require('dotenv').config();


const PORT=process.env.PORT;
//path
const authRoute=require('./routes/auth')
const connectdb=require('./util/database');
connectdb();


app.use(express.json());
app.use(helmet());
app.use('/auth',authRoute);


app.listen(PORT,(req,res)=>{
    console.log('Server is running')
})