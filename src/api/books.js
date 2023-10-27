// Asios 
import axios from 'axios';
const {port} = require("../backend/configs/db.configs");
const getBoook = async () => {
    const res = await axios({
      method: "GET",
      url: `http://localhost:${port}/Books`,
    });
    return res.data;
  }; 

const createBoook = async (account) => {
    const res = await axios({
        method: "POST",
        url: `http://localhost:${port}/Books`,
        data: account,
    });
    return res.data;
}

const getDetailBooks= async (id) => {
     try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:${port}/Books/${id}`,
      });
      return res.data;
     } catch (error) {
      return false;
     }
  }; 

module.exports = {getBoook,createBoook,getDetailBooks};


