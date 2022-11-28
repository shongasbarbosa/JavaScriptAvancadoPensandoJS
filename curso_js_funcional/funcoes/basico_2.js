function bomDia() {
    console.log('Bom Dia');
}

const boaTarde = function () {
    console.log('Boa Tarde')
}

// Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função a partir de outra função
// const potencia = base => {    
//     return exp => {
//         return Math.pow(base, exp)       
//     }
// }
// Forma resumida usando retorno implicito da função
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))