const gerarNumEntre = (max, min) => {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumEntre(1, 60)
    .then(num => num * 10)
    .then(numx10 => `O número foi ${numx10}`)
    .then(console.log)
    
    