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





/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - task
 *       properties:
 *         id:
 *           type: integer
 *         task:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *         isCompleted:
 *           type: boolean
 *       example:
 *         id: 1
 *         task: Learn Swagger
 *         date: 2025-07-19
 *         isCompleted: false
 */

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Todo created
 *       500:
 *         description: Server error
 */
router.post("/", todoController.create);

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 */
router.get("/", todoController.findAll);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isCompleted:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Todo updated
 *       404:
 *         description: Todo not found
 */
router.put("/:id", todoController.update);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Todo ID
 *     responses:
 *       200:
 *         description: Todo deleted
 */
router.delete("/:id", todoController.delete);
