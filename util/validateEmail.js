const axios=require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const validateEmail = async (email) => {
    const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=${API_KEY}&email=${email}`;
    
    try {
      const response = await axios.get(apiUrl);
      const result = response.data;
      console.log(result.status)
  
      if (result.status === 'valid') {
        return true;
      }
  
      return false;
    } catch (error) {
      console.error('Error validating email:', error.message);
      return false; 
    }
  };

module.exports=validateEmail