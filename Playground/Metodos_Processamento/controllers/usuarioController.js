const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarioJson = path.join("usuarios.json")
const UsuarioController = {
    regitroForm: (req,res) => {
        return res.render('registroUsuario');
    },
    salvarForm: (req,res) => {
        let {nome, email, senha} = req.body;
        let {files} = req;
        let senhaC = bcrypt.hashSync(senha,10);
        let usuario = JSON.stringify({nome, email, senha: senhaC, avatar:files[0].originalname});
        fs.writeFileSync(usuarioJson, usuario);
        res.send('Usuario cadastrado com sucesso');
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    logar: (req,res) => {
        let {email, senha} = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson,{encoding:'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);
        if(!bcrypt.compareSync(email != usuarioSalvo.email)){
            return res.send('Usuario Invalido')
        }
        res.redirect("/produtos")
    }
}

module.exports = UsuarioController