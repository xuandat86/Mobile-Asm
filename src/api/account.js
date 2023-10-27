// Asios 
import axios from 'axios';
const {port} = require("../backend/configs/db.configs");
const getAcounts = async () => {
    const res = await axios({
      method: "GET",
      url: `http://localhost:${port}/Accounts`,
    });
    return res.data;
  }; 

const createAcount = async (account) => {
    const res = await axios({
        method: "POST",
        url: `http://localhost:${port}/Accounts`,
        data: account,
    });
    return res.data;
}


const getLogin = async (name,pass) => {
     try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:${port}/Accounts/${name}/${pass}`,
      });
      return res.data;
     } catch (error) {
      return false;
     }
  }; 


const getAcount = async (id) => {
  try {
   const res = await axios({
     method: "GET",
     url: `http://localhost:${port}/Accounts/${id}`,
   });
   return res.data;
  } catch (error) {
   return false;
  }
}; 


module.exports = {getAcounts,createAcount,getLogin,getAcount};


