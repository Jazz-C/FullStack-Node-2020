const fs = require('fs');
const path = require('path');

const produtosJson = path.join('produtos.json');

const produtoController = {
    viewForm: (req,res) => {
        return res.render('produtos')
    },
    salvarForm: (req,res) => {
        let {nomeProduto, precoProduto} = req.body;
        // res.send('O Produto ' + nomeProduto + ' foi criado com sucesso')
        let dadosJson = JSON.stringify([{nome: nomeProduto,preco:precoProduto}]);
        fs.writeFileSync(produtosJson,dadosJson)
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req, res) => {
        res.render('sucesso');
    },
    viewAttForm: (req,res) => {
        let {id} = req.params;
        let produtos = [
            {id:1, nome: 'Produto X', preco: 10},
            {id:2, nome: 'Produto Y', preco: 20}
        ]

        // res.send('eu quero editar o produto '+ id);

        res.render('editarProduto',{produto: produtos[id]})
    },
    editarProduto: (req,res) => {
        let {nomeProduto, precoProduto} =  req.body;
        res.send('Voce editou o produto ' + nomeProduto)
    },
    listaProdutos: (req,res) => {
        let produtos = fs.readFileSync(produtosJson, {encoding:'utf-8'})
        produtos = JSON.parse(produtos);
        res.render('listaProdutos', {listaProdutos: produtos, usuario: req.session.usuario})
    },

    deletarProduto: (req,res) => {
        let {id} =  req.params;

        res.send('estou deletando o produto com id ' + id)
    }
   
}

module.exports = produtoController