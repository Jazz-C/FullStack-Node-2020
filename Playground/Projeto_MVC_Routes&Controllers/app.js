const express = require('express');
const rotaProdutos = require('./routes/RotaProdutos');
let app = express();

app.use('/Produtos',rotaProdutos);

app.listen(3000,()=>console.log('Servidor rodando na porta 3000'));


