const { DataTypes } = require('sequelize');

// User
const tb_user = (sequelize) => (
    sequelize.define(
        "USER",
        {
            fullname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Phone_user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Username_user: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Password_user: {
                type: DataTypes.STRING,
                allowNull: false
            },
            hierarchy: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: "user",
            timestamps: true
        }
    )
);
// Book
const tb_Books = (sequelize) => (
    sequelize.define(
        "Books",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            photo: {
                type: DataTypes.BLOB,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,          
            },
            deatail: {
                type: DataTypes.TEXT,
            },
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,          
            }
        },
        {
            tableName: "books",
            timestamps: true
        }
    )
);
// Category
const Category = (sequelize) => (
    sequelize.define(
        "Category",
        {
            title: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,    
            },
        },
        {
            timestamps: false
        }
    )
);
// Order 
const Order =  (sequelize) => (
    sequelize.define(
        "Order",
        {
            id_user: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            id_boooks: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            count: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }, 
            payment: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {

            timestamps: true
        }
    )
);






module.exports = { tb_user, Category, tb_Books,Order  };
