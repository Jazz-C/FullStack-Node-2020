let UsuarioController = {
    regitroForm: (req,res) => {
        return res.render('registroUsuario')
    },
    salvarForm: (req,res) => {
    },
    loginForm: (req, res) => {
        res.render('login');
    },
    logar: (req,res) => {
    }
}

module.exports = UsuarioController