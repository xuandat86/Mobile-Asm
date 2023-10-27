
const {user}  = require("../model/index");
const services_ac = require("../services/services_ac");


const getATC = async (req, res) => {
     try {
      const newAC = await services_ac.getListAcount1();
      res.status(200).json(newAC);
     } catch (error) {
      res.status(404).send("ERROR 404");
     }22
  }

  const createAcount = async (req,res) => {
    const {fullname,Phone_user,Username_user,Password_user,hierarchy} = req.body;
    console.log(fullname);
    try {
      const newAct = await services_ac. createAcount1(fullname,Phone_user,Username_user,Password_user,hierarchy);
      res.status(200).send(true);
    } catch (error) {
      res.status(404).send(false);
    }
  }
  const findAcount = async (req, res) => {
    const { id } = req.params;
    if (id) {
      try {
        const account = await services_ac.findAcount1(id);
        if (account) {
          res.status(200).send(account);
        } else {
          res.status(404).send("Not found");
        }
       
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.status(400).send("Bad Request");
    }
  };
  
  const checkLogin = async (req, res) => {
    const { username, password } = req.params;
    if (username && password) {
      try {
        const newUser = await services_ac.checkLogin1(username,password);
        console.log(newUser);
        if (newUser.length > 0) {
          res.status(200).send(newUser[0].hierarchy);
        } else {
          res.status(401).send(false);
        }
      } catch (error) {;
        res.status(500).send("Server Error");
      }
    } else {
      res.status(400).send("Bad Request");
    }
  };
  
  const updateAcount = async (req,res) => {
    const {id} = req.params;
    const {fullname,Phone_user,Password_user} = req.body;
    if(id){
       try {
        const newUser  =  await services_ac.updateAcount1(id,fullname,Phone_user,Password_user);
        return  res.status(200).send(newUser);
          
       } catch (error) {
        res.status(400).send("Bad Request");
       }
    }else {
      res.status(400).send("Bad Request");
    }
  }
  const deleteAcount = async (req,res) => {
    const {id} = req.params; 
    if(id){
      try {
        const DeleteAc = await services_ac.deleteAcount1(id);
      res.status(200).send("Delete Success");
      return DeleteAc;
      } catch (error) {
        res.status(400).send("Bad Request");
      }
    }else{
      res.status(400).send("Bad Request");
    }
  }
  const findAccount_Email = async (req,res) => {
    const {id} =  req.params;
    if(id)
   {
    const account = await services_ac.findAcountEmail(id);
    console.log(account);
    try {
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      res.status(500).send("Error Sever and  Request");
    }
    }
    else res.status(400).send("Bad Request");
  }

  
  module.exports = {getATC,createAcount,findAcount,checkLogin,updateAcount,deleteAcount,findAccount_Email};
  

  // Da241210212
  // Da24101 