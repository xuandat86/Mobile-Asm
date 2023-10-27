const express = require("express");
const Router_order = express.Router();
const control = require("../controllers/controller_order");
// Phương thức 

Router_order.post("/", control.CreateOrder);
Router_order.get("/", control.getAll);
Router_order.get("/:id", control.getDetail);




module.exports = Router_order;