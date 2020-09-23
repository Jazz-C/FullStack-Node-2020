let numerosPares = [2,4,6,8,10];

// método map

let numerosParesDobros = numerosPares.map(function(valor){
    return valor*2;
})

console.log(numerosParesDobros);

// método filter

let numerosFiltrados =  numerosPares.filter(function(valor){
    return valor < 6;
})

console.log(numerosFiltrados);

// método reduce

let somaPares = numerosPares.reduce(function(acum,valor){
    return acum + valor;
})

console.log(somaPares);

// método foreach

numerosPares.forEach(function(valor,indice){
    console.log("O indice " + indice + "tem o valor: " + valor);
})





