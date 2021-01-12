const path =  require('path');

console.log(path)

const rota = path.join("..","tecnologia","video-games","mario-kart")

let listaUsuarios = path.join("..","data","usuarios","usuarios.json")

let extensao = path.extname(listaUsuarios);

let diretorio = path.dirname(listaUsuarios);
