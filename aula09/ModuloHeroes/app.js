// importando modulo FS para ler outros files
const fs = require('fs');

let dados = fs.readFileSync(__dirname +"/dados.txt", 'utf-8');

    // console.log(dados);

// importando momento para utilizar funcionalidade format

let moment = require('moment');

let data = moment().format('MM do YY')

    // console.log(data)

// Importando Modulo SuperHeroes

const superHerois = require('./SuperHerois');

console.log(superHerois);



