// Um função pura é uma função em que o valor de retorno
// é determinado apenas por seus valores de entrada
// sem efeitos colaterais observáveis

// Este parâmetro torna a função impura
const PI = 3.14

function areaCirc(raio) {
    return raio * raio * PI
}

console.log(areaCirc(10))

// Passando os valores de entrada no parâmetro da função
// torna a
function calculoAreaCircular(r, pi) {
    return r * r * pi
}

console.log(calculoAreaCircular(10, 3.141592))