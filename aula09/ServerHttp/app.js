const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/html"});
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
}).listen(3000, () => {
  console.log('Server is activated')
});