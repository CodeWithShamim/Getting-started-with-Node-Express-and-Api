const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
    response.send("This is express");
})

app.listen(port, () => {
    console.log('Listening is port', port);
});