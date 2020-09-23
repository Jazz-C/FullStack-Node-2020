// for(i = 0 ; i<=4 ; i++){
//     console.log(i)
// }

// function naoPareDeContarImparesAte(numero){
//     let impar = 0;
//     for (let i = 0; i <= numero; i++) {
//       if(i % 2 !== 0) {
//         impar = impar + 1;
//       }
//       console.log(impar);
//     }
//   }
//   naoPareDeContarImparesAte(10)

function naoPareDeContarImparesAte(numero) {
    let quantidadeDeImpares = 0;
    for (let i = 0; i <= numero; i++) {
      if (i % 2 == 1) {
        quantidadeDeImpares = quantidadeDeImpares + 1;
      }
    }
    console.log(quantidadeDeImpares)
  }

  naoPareDeContarImparesAte(10)
