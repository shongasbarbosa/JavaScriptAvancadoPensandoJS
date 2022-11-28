// Função somar que receba 3,4,5
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const resultado = somar(3)(4)
console.log(resultado(3))

// Função calcular que recebe 3,7,fn
function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x,y)
        }
    }
}

function subtrair(a,b) {
    return a - b
}

function multiplicar(a,b) {
    return a * b
}

function dividir(a,b) {
    return a / b
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
const r3 = calcular(10)(5)(dividir)

console.log('a subtração é:', r1)
console.log('a multiplicação é:', r2)
console.log('a divisão é:', r3)