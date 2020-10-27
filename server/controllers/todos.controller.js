const asyncWrapper = require('../middleware/asyncWrapper');
const TodoService = require('../service/todosService')
const todoService = new TodoService();

exports.getTodos = asyncWrapper (
    async (req, res) => {
        const todos = await todoService.findTodos();
        res.status(200).json({
            succsses: true,
            data: todos
        });
    }
);

exports.getTodo = asyncWrapper (
    async (req, res) => {
        const todo = await todoService.findTodo(req.params.id);
        res.status(200).json({
            succsses: true,
            data: todo
        })
    }
);

exports.createTodo = asyncWrapper(
    async (req, res) => {
        const todo = await todoService.createTodo(req.body);
        res.status(200).json({
            succsses: true,
            data: todo
        })
    }
);

exports.editTodo = asyncWrapper(
    async  (req, res) => {
        const todo = await todoService.editTodo(req.params.id, req.body);
        res.status(200).json({
            succsses: true,
            data: todo
        });
    }
);

exports.deleteTodo = asyncWrapper(
    async (req, res) => {
        await todoService.deleteTodo(req.params.id);
        res.status(200).json({
            succsses: true,
            data: {}
        });
    }
);
