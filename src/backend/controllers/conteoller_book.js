
const sv_boook = require("../services/services_book");

const createBook = async (req,res) =>  {
    const book = req.body;
    if(book) {
       try {
        const newBook =  await sv_boook.CreateBook(new Object(book));
        res.status(200).send("Succset");
       } catch (error) {
        res.status(400).send("Bad request");
       }
    }
}

const  getBooks = async (req,res) =>  {
       try {
        const newBook =  await sv_boook.getBooks();
        res.status(200).json(newBook);
       } catch (error) {
        res.status(400).send("Bad request");
       }
    
}

const getDetail = async (req,res) =>  {
    const {id} =  req.params;
    if(id) {
       try {
        const newBook =  await sv_boook.detailBook(id);
        res.status(200).json(newBook);
       } catch (error) {
        res.status(400).send("Bad request");
       }
    }
}

module.exports = {createBook,getBooks,getDetail};


