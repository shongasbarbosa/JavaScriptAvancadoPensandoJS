// Funções que opera em outras funções,
// tomando-as como argumentos ou retornando-as, são chamadas de higher_order
// functions.

function executar(fn, ...params) {
    return function(textoInicial) {
        return `${textoInicial} ${fn(...params)}.`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multiplicar(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma é:')
const r2 = executar(multiplicar, 30, 40)('O resultado da multiplicação é:')

console.log(r1, r2)