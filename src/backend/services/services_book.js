const {tb_Books1}  = require("../model/index");

const CreateBook = async (book) => {
    try {
      const books = await tb_Books1.create(new Object(book));
      return books;
    }catch (error) {
        throw error;
    }
}

const getBooks = async () => {
    try {
        const books = await tb_Books1.findAll();
        return books;
    }catch(error) {
       throw error;
    }
}

const detailBook = async (id) => {
    try {
        const book = await tb_Books1.findOne({
            where: {
                id,
            }
        });
        return book;
    } catch (error) {
        throw error;
    }
}


// Phiếu mượn là có ngày mượn và ngày trả => 
module.exports = {CreateBook,getBooks,detailBook};