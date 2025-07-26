const { swaggerUi, swaggerSpec } = require("./swagger");
require('dotenv').config();

const express= require("express");
const app=express();
const db=require("./models");

const cors = require('cors');
app.use(cors());


//Middle ware 

app.use(express.json());

const todoRoutes=require("./routes/todo");
app.use("/api/todos",todoRoutes);
console.log("DB loaded:", db);

db.sequelize.sync().then(()=>{

    console.log("Database sync success ");

const PORT=process.env.PORT||3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {

  console.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    status: 'error',
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });

  // next(new ApiError("Not found", httpStatus.NOT_FOUND));
});


app.listen(PORT,()=>{
    console.log(`Server is running on port :${PORT}`);

})


})
