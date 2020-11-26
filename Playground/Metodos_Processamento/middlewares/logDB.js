const fs = require('fs');

function logDB(req,res,next) {
    fs.appendFileSync('logDB.txt','O Usuario entrou na url: ' + req.url)
    next();
}

module.exports = logDB