let pessoa = ["Jess"];
console.log(pessoa);

// push - adiciona um elemento no final do array
    pessoa.push(29);
    console.log(pessoa);

// pop - elimina o elemento no final do array
    let extrair = pessoa.pop();
    // console.log(extrair);

// unshift adiciona um elemento no inicio do array
    pessoa.unshift(30);
    // console.log(pessoa);

// shift - elimina o elemento no inicio de um array
    pessoa.shift();
    console.log(pessoa);

// indexOf -  procura a posição de um elemento dentro do array

pessoa.push("Jess");
console.log(pessoa.indexOf("Jess"));
    // Primeira ocorrência
pessoa.push("50");
pessoa.push("Jess");  
console.log(pessoa.lastIndexOf("Jess")); 
    // Ultima ocorrência



