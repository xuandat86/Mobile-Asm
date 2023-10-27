// Sequelize 
const {Sequelize} = require("sequelize");
const {HOST,USER,PASSWORD,DB,dialech} = require("../configs/db.configs");
const  { tb_user,Category,tb_Books,Order } = require("./md.book"); 


// Connect database 
 // Conect sequelize => 
const sequelize = new Sequelize(DB,USER,PASSWORD,
    {
    host: HOST,
    dialect: dialech  
    });
// => check conect 
const checkConnect = async () => {
  try {
     await sequelize.authenticate();
     console.log("Connect database success fully ");
  }catch(error) {
      console.log("Unable connect to the database" + error);
  }
}
// Connect table  tới bảng có sẵn trong sql 
const user = tb_user(sequelize);
const Category1 = Category(sequelize);
const tb_Books1 = tb_Books(sequelize);
const tb_Order = Order(sequelize);
// Mối quan hệ 1 và chỉ 1 
tb_Books1.belongsTo(Category1, { foreignKey: 'category_id' });
Category1.hasMany(tb_Books1, {foreignKey: 'category_id' });
// Mối quan hệ 
user.hasMany(tb_Order, { foreignKey: 'id_user' });
tb_Order.belongsTo(user, { foreignKey: 'id_user' });
// Mối quan hệ nhiều nhiều
user.belongsToMany(tb_Books1, {
  through: 'Order',
  foreignKey: 'id_user',
  otherKey: 'id_boooks',
});
tb_Books1.belongsToMany(user, {
  through: 'Order',
  foreignKey: 'id_boooks',
  otherKey: 'id_user',
});
// BOOK
tb_Books1.hasMany(tb_Order, { foreignKey: 'id_boooks' });
tb_Order.belongsTo(tb_Books1, { foreignKey: 'id_boooks' });


module.exports = {checkConnect, sequelize,user,tb_Books1,Category1,tb_Order}

