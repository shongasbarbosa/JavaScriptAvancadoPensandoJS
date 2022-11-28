const gerarNumEntre = (max, min, numRepetido) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numRepetido.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumEntre(1, 100, numeros))
    }
    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)