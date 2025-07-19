require('dotenv').config();

const express= require("express");
const app=express();
const db=require("./models");


//Middle ware 

app.use(express.json());

const todoRoutes=require("./routes/todo");
app.use("/api/todos",todoRoutes);
console.log("DB loaded:", db);

db.sequelize.sync().then(()=>{

    console.log("Database sync success ");

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`);

})


})
