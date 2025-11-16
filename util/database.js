// const Sequelize =require('sequelize');

// const sequelize=new Sequelize(process.env.DB_DBNAME,process.env.DB_ROLE,process.env.DB_PASSWORD,{
//     dialect:process.env.DIALECT,
//     host:process.env.DB_HOST
// });

// module.exports=sequelize;


const { Sequelize } = require("sequelize");


const  sequelize= new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_ROOT_PASSWORD,
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
  }
);

module.exports = sequelize;