const express = require('express');
const app = express();
const port = 3000;

//Midddleware to parse JSON bodies
app.use(express.json());

//Array to store todo items
let todos = [];

//Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

//Get a specific todo by ID
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
        if(todo){
            res.json(todo);
        }else{
            res.status(404).json({message : 'Todo not found'});
        }
});

//Add a new todo
app.post('/todos', (req, res) => {
    const {title, completed = false} = req.body;
    if(!title){
        return res.status(400).json({message: 'Title is required'});
    }
    const newTodo = {
        id: todos.length + 1,
        title,
        completed
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

// Update a todo by ID
app.put('/todos/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if(!todo){
        return res.status(404).json({message: 'Todo not found'});
    }
    const {title, completed} = req.body;
    if (title) todo.title = title;
    if(completed !== undefined) todo.completed = completed;
    res.json(todo);
});

//Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if(index === -1){
        return res.status(404).json({message: 'Todo not found'});
    }
    todos.splice(index, 1);
    res.status(204).send();
})

//Start the server
app.listen(port, () => {
    console.log('Todo app listening at http://localhost:${port}');
});