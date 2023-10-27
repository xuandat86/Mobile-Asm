// Asios 
import axios from 'axios';
const getAcounts = async () => {
    const res = await axios({
      method: "GET",
      url: `http://localhost:3008/Accounts`,
    });
    return res.data;
  }; 

const createAcount = async (account) => {
    const res = await axios({
        method: "POST",
        url: `http://localhost:3008/Accounts`,
        data: account,
    });
    return res.data;
}


const getLogin = async (name,pass) => {
     try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:3008/Accounts/${name}/${pass}`,
      });
      return res.data;
     } catch (error) {
      return false;
     }
  }; 

module.exports = {getAcounts,createAcount,getLogin};


