const {tb_Order}  = require("../model/index");


const CreateOrder = async (order) => {
    try {
      const newOrder = tb_Order.create(new Object(order));
      return newOrder;
    } catch (error) {
        throw error;
    }
}

const GetOrders = async () => {
    try {
        const Orders = await tb_Order.findAll();
        return Orders;
    } catch (error) {
        throw error;
    }
}

const GetDeailOrder = async (id) => {
    try {
        const Orders = tb_Order.findOne({
            where: {
                id,
            }
        });
        return Orders;
    } catch (error) {
        throw error;
    } 
}



module.exports = {CreateOrder,GetOrders,GetDeailOrder};
