var express = require('express');
var router = express.Router();

var produtoController = require('../controllers/produtoController');

router.get('/criar', produtoController.viewForm);
router.post('/criar', produtoController.salvarForm);
router.get('/sucesso', produtoController.sucesso);
router.get('/:id/editar', produtoController.viewAttForm);
router.put('/editar', produtoController.editarProduto);
router.get('/', produtoController.listaProdutos);
router.delete('/deletar/:id', produtoController.deletarProduto);

module.exports = router;