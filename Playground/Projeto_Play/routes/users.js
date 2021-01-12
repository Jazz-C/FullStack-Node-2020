var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const logDBMiddleware = require('../middlewares/logDB');
const {check, validationResult, body} = require('express-validator');

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
router.post('/criar', upload.any(), logDBMiddleware,[
  check("nome").isLength({min:3}).withMessage("Nome usuario deve conter minimo 3 caracteres"),
  check("email").isEmail(),
  check("senha").isLength({min:6}),
  body('email').custom((email)=> {
    let usuario = JSON.parse(fs.readFileSync('usuarios.json'))
    return usuario.email !== email
  }).withMessage('Usuario já existe')
], usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logar);

module.exports = router;
