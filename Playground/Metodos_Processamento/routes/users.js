var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/UsuarioController');

/* GET users listing. */
router.get('/criar', usuarioController.regitroForm);
router.post('/criar', usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logar);

module.exports = router;
