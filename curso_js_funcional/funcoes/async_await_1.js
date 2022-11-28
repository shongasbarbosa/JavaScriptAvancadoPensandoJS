const { resolve } = require("path")

esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Resultado do retorno Async/Await ${valor + 1} `)

    await esperarPor(1500)
    console.log(`Executando Async/Await ${valor + 2} `)

    await esperarPor(1500)
    console.log(`Executando Async/Await ${valor + 3} `)
}

executar()