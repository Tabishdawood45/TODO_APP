// const express = require('express');
// const app = express();
// const PORT = process.env.PORT  || 3000;

// app.get ('/', (req,res) => {
//     res.send("Hello all! this is my testing");
// });

// app.listen(PORT, () => {
//     console.log ('server is running on http://localhost:${PORT}');
// });


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let todos = []; // Array to store to-do items

// Routes
app.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

app.post('/add', (req, res) => {
    const todoItem = req.body.todo;
    if (todoItem) {
        todos.push(todoItem);
    }
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const itemToDelete = req.body.itemToDelete;
    todos = todos.filter(item => item !== itemToDelete);
    res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
