var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const logDBMiddleware = require('../middlewares/logDB');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

const usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/criar', usuarioController.regitroForm);
router.post('/criar',upload.any(), logDBMiddleware,usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logar);

module.exports = router;
