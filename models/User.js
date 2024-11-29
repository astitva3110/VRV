const  mongoose= require('mongoose');
const Joi=require('joi');

const userSchema=mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    }
})
const User=mongoose.model('User',userSchema);

const userValidation=Joi.object({

    Email:Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required',
    }),

    Password:Joi.string()
    .min(6)
    .required()
    .messages({
        'string.min': 'Password must be at least 6 characters long',
        'any.required': 'Password is required',
    }),

    isAdmin:Joi.boolean()
    
})

const validateUser=(userData)=>{
    return userValidation.validate(userData);
}

module.exports={User,validateUser};