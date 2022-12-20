// Um função pura é uma função em que o valor de retorno
// é determinado apenas por seus valores de entrada
// sem efeitos colaterais observáveis


let qtdeExecucoes = 0
// função pura
function somar(a, b) {
    qtdeExecucoes++ // efeitos colaterias observáveis
    return a + b
}

console.log(somar(1,1))
console.log(somar(1,1))
console.log(somar(1,1))
console.log(somar(1,1))
console.log(somar(1,1)) 
console.log(qtdeExecucoes)