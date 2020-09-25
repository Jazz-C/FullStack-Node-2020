const express = require('express');
const app = express();
const rotasProduto = require("./rotas/rotasProduto");


app.get('/nome', (req,res) => {
    res.send('Ola a todos!')
});

app.use('/Produtos', rotasProduto);

app.listen(3000, () => {
    console.log('servidor rodando')
})
