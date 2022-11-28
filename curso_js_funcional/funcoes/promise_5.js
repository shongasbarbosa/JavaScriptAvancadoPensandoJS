funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }        
    })
}

funcionarOuNao('Deu certo...', 0.9)
    .then(v => `O teste ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro esperado: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`${err} no teste`))
    .then(() => console.log('Fim'))