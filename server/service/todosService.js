const Todo = require('../models/todo.model');
const ErrorResponse = require('../helper/ErrorResponse');

class TodosService {
    async findTodos() {
        const todos = await Todo.find();
        if (!todos) {
            throw new ErrorResponse(404, 'Todos not found');
        }
        return todos;
    }
    async findTodo(id) {
        const todo = await Todo.findById(id);
        if (!todo) {
            throw new ErrorResponse(404, 'Todo not found');
        }
        return todo;
    }
    async createTodo(data) {
        const todo = await Todo.create(data);
        return todo;
    }
    async editTodo (id, data) {
        const todo = await Todo.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!todo) {
            throw new ErrorResponse(404, 'Todo not found');
        }
        return todo;
    }
    async deleteTodo (id) {
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            throw new ErrorResponse(404, 'Todo not found');
        }
    }
}

module.exports = TodosService;
