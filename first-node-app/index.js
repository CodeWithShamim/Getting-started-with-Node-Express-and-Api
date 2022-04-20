const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
    response.send("This is express nodemon sssssssseeeeee");
})

const users = [
    { id: 1, name: 'shamim', email: 'shamim@gmail.com' },
    { id: 2, name: 'salman', email: 'salman@gmail.com' },
    { id: 3, name: 'sakib', email: 'sakib@gmail.com' },
    { id: 4, name: 'sojib', email: 'sojib@gmail.com' },
    { id: 5, name: 'sadman', email: 'sadman@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);

    const getUser = users.find(user => user.id === id);
    res.send(getUser)
})

app.listen(port, () => {
    console.log('Listening to port', port);
});