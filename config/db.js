const sequelize= require ("sequelize");

const db=new sequelize("list_app","root","",{
    dialect:"mysql"
})

db.sync({})

module.exports=db;