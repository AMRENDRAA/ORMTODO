const {Sequelize,DataTypes}=require("sequelize");
const dbConfig=require("../config/db.config");


const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,

});

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;


db.Todo=require("./Todo")(sequelize,DataTypes);

module.exports=db;