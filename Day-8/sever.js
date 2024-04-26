//Express JS



const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('<h1>Welcome Get:get</h1>');
})


app.post('/home', (req, res) => {
    res.send("this is home page:post");
})

app.put('/home', (req, res) => {
        res.send('<h1>Welcome put:put</h1>');
})
    

app.patch('/home', (req, res) => {
    res.send("this is home page:patch");
})

app.delete('/home', (req, res) => {
    res.send("this is home page:dlt");
})

app.listen(2000);











