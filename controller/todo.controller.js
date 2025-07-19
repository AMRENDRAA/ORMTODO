const { Where } = require("sequelize/lib/utils");
const db=require("../models");
const Todo=db.Todo;


//create a todo 

exports.create=async(req,res)=>{
    try{
        const {task,date}=req.body;

        const todo =await Todo.create({task,date});
        res.status(201).json({
            status:"Success",
            data:{
                todo
            }
        })
    }catch(error){
        res.status(500).json({
            error:error.message


        })
    }
}


// Get all todos 

exports.findAll=async(req,res)=>{
    try{
        const todos= await Todo.findAll();
        res.status(200).json({
            status:"success",
            data:todos

    }
)
    }catch(error){

        res.status(500).json({error:error.message});

    }
}

exports.update= async(req,res)=>{


    try{

        const{id}=req.params;
        const {isCompleted}=req.body;

        const [updatedRows]=await Todo.update(
            {isCompleted},
            {where:{id}}
        );

        // if(updatedRows===0){
        //     status:"Success",
        //     data:{
        //         todo:UpatedTodo
        //     }
        // }

    }catch(err){
        res.status(500).json({
            status:"Failed",
            err:err.message
            

        })
    }
}

exports.delete= async (req,res)=>{
    try{

        const {id}=req.params;
        await Todo.destroy({where :{id}});
        res.status(201).json({
            message:"Deleted "
        })
    }catch(err){
        res.status(500).json({
            status:"Failed",
            err:err.message
        })
    }
}