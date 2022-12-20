// A função é impura, pois usa uma função que vem de fora
// função Math.randomS
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1,10000))
console.log(gerarNumeroAleatorio(1,10000))
console.log(gerarNumeroAleatorio(1,10000))
console.log(gerarNumeroAleatorio(1,10000))
console.log(gerarNumeroAleatorio(1,10000))