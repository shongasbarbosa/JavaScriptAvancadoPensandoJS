const gerarNumEntre = (max, min, tempo) => {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumEntre(1, 60, 4000),
        gerarNumEntre(1, 60, 1000),
        gerarNumEntre(1, 60, 500),
        gerarNumEntre(1, 60, 3000),
        gerarNumEntre(1, 60, 100),
        gerarNumEntre(1, 60, 1500),
    ])
}

gerarVariosNumeros().then(console.log)