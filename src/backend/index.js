// Backend
const express = require("express");
const app = express();
const {Router_ac,Router_book, Router_order} = require("./routers/index");
const {checkConnect, sequelize} = require("./model/index");
const {port} = require("../backend/configs/db.configs");
app.use(express.json());
app.use("/Accounts", Router_ac);
app.use("/Books", Router_book);
app.use("/Order",Router_order )
// Kiểm tra kết nối 
checkConnect();
// Đồng bộ dữ liệu 
sequelize.sync({alert: true});
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
