var express = require('express');
var router = express.Router();
var contatoController = require('../controllers/contatoController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', contatoController.index);


module.exports = router;
