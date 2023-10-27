const express = require("express");
const Router_book = express.Router();
const control = require("../controllers/conteoller_book");
// Phương thức 

Router_book.post("/", control.createBook);
Router_book.get("/", control.getBooks);
Router_book.get("/:id", control.getDetail);




module.exports = Router_book;