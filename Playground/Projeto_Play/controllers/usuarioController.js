const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuarioJson = path.join("usuarios.json")
const UsuarioController = {
    regitroForm: (req,res) => {
        return res.render('registroUsuario');
    },
    salvarForm: (req,res) => {
        let listaErros = validationResult(req);
        if(listaErros.isEmpty()){
            let {nome, email, senha} = req.body;
            let {files} = req;
            let senhaC = bcrypt.hashSync(senha,10);
            let usuario = JSON.stringify({nome, email, senha: senhaC, avatar:files[0].originalname});
            fs.writeFileSync(usuarioJson, usuario);
            return res.send('Usuario cadastrado com sucesso');
        } else {
            return res.render('registroUsuario', {errors: listaErros.errors})
        }
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    logar: (req,res) => {
        let {email, senha} = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJson,{encoding:'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if(email != usuarioSalvo.email){
            return res.send('Usuario Invalido')
        }

        if(!bcrypt.compareSync(senha != usuarioSalvo.senha)){
            return res.send('Senha Invalida')
        }

        req.session.usuario = usuarioSalvo
        res.redirect("/produtos")
    }
}

module.exports = UsuarioController