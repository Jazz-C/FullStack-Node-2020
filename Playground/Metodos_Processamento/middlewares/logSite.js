const fs = require('fs');

function logSite(req,res,next) {
    fs.appendFileSync('log.txt','O Usuario entrou na url: ' + req.url)
    next();
}

module.exports = logSite