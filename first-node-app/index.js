const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware 
app.use(cors());
app.use(express.json())

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
    console.log(req.query)
    const serachName = req.query.name.toLowerCase();
    const findUser = users.filter(user => user.name.toLowerCase().includes(serachName))
    res.send(findUser)
})

// post data 
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)

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