const express = require('express');
const router =  express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id',ProdutoController.deletarProduto);

module.exports = router;

