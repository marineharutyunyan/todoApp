const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./configs/db');
const todosRouter = require('./routes/todo.routes');
const errorHandler = require('./middleware/errorHandler');
dotenv.config({path: './configs/configs.env'});

const app = express();
connectDb();

app.use(express.json());
app.use('/api/todos', todosRouter);

app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server is Running on port ${process.env.PORT}`));
