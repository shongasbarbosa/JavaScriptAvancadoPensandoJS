// Arrow function
//função com o retorno implicito
const felizNatal = () => console.log('Feliz Natal')
felizNatal()

// função com o retorno implicito usando template string
const saudacao = nome => `Fala ${nome}, beleza?!`
console.log(saudacao('Ai se sesse'))

// função com o retorno no corpo da função
const somar = numeros => {
    let total = 0
    for(let item of numeros) {
        total += item
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

// como usar o this (como acessar o último elemento do array)
Array.prototype.ultimo = function() {
    console.log(this[3])
}

const numeros = [1,2,3,4,5,6]
numeros.ultimo()