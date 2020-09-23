const express = require('express');

const app = express();

let produto = {
    nome: 'teste',
    preco: "10.00",
    quantidade: "1000"
}

app.get('/nome', (req,res) => {
    let name = produto.nome;
    res.send(name)
});

app.get('/preco', (req,res) => {
    let price = produto.preco;
    res.send(price)
});

app.get('/quantidade', (req,res) => {
    let quanti = produto.quantidade;
    res.send(quanti)
});

app.listen(3000, () => {
    console.log('servidor rodando')
})

// ***** utilizando importacao de ROUTER ******

const express = require("express")

// criando aplicacao express
const app = express()

// importando rotas da aplicacao
const routes = require("./routes")

app.use(routes)

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000')
})