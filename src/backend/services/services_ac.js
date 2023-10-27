// Mục đích sinh ra file services 

/*
Tách biệt logic và tránh nhiệm 
Tái sử dụng mã 
Dễ Kiểm thử 
Phân chia cv 
Bảo trì dễ 
*/
const {user}  = require("../model/index");

const getListAcount1 = async () => {
  try {
    const acounts = await user.findAll();
    return acounts;
  } catch (error) {
     throw error;
  }
}

const findAcount1 = async(id) => {  
    try {
        const account = await user.findOne(
            {
               where: {
                id,
               }
            }
        );
        return account;
    } catch (error) {
        throw error;
    }
}

const findAcountEmail = async (username) => {
  try {
    const account = await user.findOne({
      where: {
        Username_user: username ,
      }
    });
    return account;
  } catch (error) {
    throw error;
  }
}



const createAcount1 = async(fullname,Phone_user,Username_user,Password_user,hierarchy) => {
    try {
        const newAcc = await user.create({fullname,Phone_user,Username_user,Password_user,hierarchy});
        return newAcc;
    } catch (error) {
        throw error;
    }
}

const checkLogin1 = async(username,pass) => {
    try {
        const newUser = await user.findAll({
            where: {
              Username_user: username,
              Password_user: pass
            }
          });
         return newUser;
    } catch (error) {
          throw error;
    }
}

const updateAcount1 = async(id,fullName,Phone_user,Password_user) => {
    const account = await user.findOne({
        where: {
          id,
        },
      });
      if (account) {
        account.fullname = fullName;
        account.Phone_user = Phone_user;
        account.Password_user = Password_user;
        const accountUpdated = await account.save();
        return  true;
      } else {
        return false;
      }
}


const deleteAcount1 = async (id) => {
  const account = await user.findOne({
    where: {
      id,
    },
  });
  if (account) {
    await user.destroy({
      where: {
        id,
      },
    });
    return true;
  } else {
    return false;
  }
}

module.exports = {getListAcount1,findAcount1,updateAcount1,createAcount1,checkLogin1,deleteAcount1, findAcountEmail} 