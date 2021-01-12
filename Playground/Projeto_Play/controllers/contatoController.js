const contatoController = {
    index: (req,res) => {
       let {nome, idade} = req.query;
    res.render("contato", {nomeUsuario: nome});
    },
    confirmar: (req,res) => {
        let {nome, email} = req.query;
     res.send("Recebido com sucesso do:" + nome);
     }
}

module.exports = contatoController