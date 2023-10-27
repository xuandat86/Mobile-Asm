const express = require("express");
const Router_ac = express.Router();
const  {getATC,createAcount,findAcount,checkLogin,updateAcount,deleteAcount,findAccount_Email} = require("../controllers/controller_ac");
// Phương thức 
Router_ac.get("/", getATC);
Router_ac.get("/:username/:password", checkLogin);
Router_ac.post("/", createAcount);
Router_ac.get("/:id", findAcount);
Router_ac.get("/find", getATC);
Router_ac.put("/:id", updateAcount);
Router_ac.delete("/:id",deleteAcount);
module.exports = Router_ac;