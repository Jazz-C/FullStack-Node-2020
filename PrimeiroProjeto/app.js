const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/plain"});
    switch(req.url){
        case "/":
            res.end("Voce esta na HomePage");
            break;
        case "/contato":
            res.end("voce esta na pagina Contacts");
            break;
        default:
            res.end("voce esta no servidor")
    }
  res.end("Meu primeiro servidor");
}).listen(3000);