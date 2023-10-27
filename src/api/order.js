import axios from 'axios';
const {port} = require("../backend/configs/db.configs");
const getOrder = async () => {
    const res = await axios({
      method: "GET",
      url: `http://localhost:${port}/Order`,
    });
    return res.data;
  }; 

const createOrder = async (account) => {
    const res = await axios({
        method: "POST",
        url: `http://localhost:${port}/Order`,
        data: account,
    });
    return res.data;
}

const getDetailOrder= async (id) => {
     try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:${port}/Order/${id}`,
      });
      return res.data;
     } catch (error) {
      return false;
     }
  }; 

module.exports = {getOrder,createOrder,getDetailOrder};
