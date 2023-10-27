const  {user, tb_Books1, Category1, tb_Order}  = require("../model/index");
const { sequelize} = require("../model/index");



const CreateOrder = async (order) => {
    try {
      const newOrder = await tb_Order.create(new Object(order));
      return newOrder;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const GetOrders = async () => {
    try {
        const Orders = await tb_Order.findAll({
            include: [
              {
                model: user,
                attributes: ['fullname'],
              },
              {
                model: tb_Books1,
                attributes: ['title','photo'],
              },
            ],
          });
        return Orders;
    } catch (error) {
        throw error;
    }
}




const GetDeailOrder = async (id) => {
    try {
        const Order = await tb_Order.findOne({ 
            where: {
                id,
            },
            include: [
                {
                    model: user, 
                    attributes: ['fullname'],
                },
                {
                    model: tb_Books1, 
                    attributes: ['title'],
                },
            ],
        });
        return Order;
    } catch (error) {
        throw error;
    } 
}

module.exports = {CreateOrder, GetOrders, GetDeailOrder};
