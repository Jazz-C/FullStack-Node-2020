const adivinhaMelhorCurso = (curso) => {
    return new Promise((resolve, reject) =>{
        if (curso == "Full Stack") {
            resolve({
                success: true,
                nomeDoCurso: curso,
                mensagem: "O" + curso + "realmente é o mais legal de DH"
            })
        } else {
            reject({
                sucess: false,
                mensagem: "Que pena! você não adivinhou o melhor curso"
            })
        }
    }
    )
}

const melhoresMateriaisDoMelhorCurso = (resposta) => {
    return new Promise((resolve, reject) => {
        if (resposta.success) {
            resolve('As matérias mais legais do curso ' + resposta.nomeDoCurso + " são API e React")
        } else {
            reject("Não temos matérias para listar do curso " + resposta.nomeDoCurso)
            
        }
    })
}

adivinhaMelhorCurso("Full Stack")
    .then(resposta => {
        console.log(resposta)
        return melhoresMateriaisDoMelhorCurso(resposta)
    })
    .then(resposta2 => {
        console.log(resposta2)
    })
    .catch(error => {
        console.log('error')
    })

