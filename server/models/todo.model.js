const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        request: [true, 'Description of Todo is required']
    }
});

module.exports = mongoose.model('Todo', TodoSchema);