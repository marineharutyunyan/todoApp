const { Router } = require('express');
const {
    getTodos,
    getTodo,
    createTodo,
    editTodo,
    deleteTodo
} = require('../controllers/todos.controller');

const router = Router();

router
    .route('/')
    .get(getTodos)
    .post(createTodo);
router
    .route('/:id')
    .get(getTodo)
    .put(editTodo)
    .delete(deleteTodo);


module.exports = router;