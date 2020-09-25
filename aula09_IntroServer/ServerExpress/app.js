const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('testando...')
});

app.get('/home', (req,res) => {
    res.send('home page...')
});

app.get('/users', (req,res) => {
    res.send('Users...')
});

app.listen(3000, () => {
    console.log('servidor rodando')
})
