const express=require("express");
const router= express.Router();

const todoController= require("../controller/todo.controller");



// CREATE API

router.post("/",todoController.create);

// TODOS FETCH


router.get("/",todoController.findAll);

router.put("/:id",todoController.update);

router.delete("/:id",todoController.delete);

module.exports=router;




