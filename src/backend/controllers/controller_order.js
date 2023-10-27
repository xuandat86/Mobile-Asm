const serrvices_order = require("../services/serrvices_order");

const getAll = async (req,res) => {
    try {
        const newList = await serrvices_order.GetOrders();
        res.status(200).send(newList);
    } catch (error) {
        res.status(500).json("Sever error ");
    }
}


const CreateOrder = async (req, res) => {
    const order = req.body;
    if (order) {
        try {
            const newOrder = await serrvices_order.CreateOrder(order); 
            res.status(201).send("createSuccess");
        } catch (error) {
            console.error(error); 
            res.status(500).send("Server error"); 
        }
    } else {
        res.status(400).send("Bad Request"); 2
    }
};


const getDetail = async (req,res) => {
    const {id} =  req.params;
    if(id){
        try {
            const Detail = await serrvices_order.GetDeailOrder(id);
            res.status(200).send(Detail);
        } catch (error) {
            res.status(400).send("Band error request");
        }
    }else {
           res.status(404).send("Sever error");
    }
}


module.exports = {getAll,CreateOrder,getDetail}