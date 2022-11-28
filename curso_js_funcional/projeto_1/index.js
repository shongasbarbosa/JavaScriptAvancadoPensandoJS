/* Gerar um resultado no formato Json, onde a
palavra será a chave e o valor será a quantidade
de vezes que a palavra apareceu na legenda. Ex.:

{
    "i": 3456,
    "you": 2459,
    "what": 1696,
    "house": 300,
    "that": 3,
    "leo": 1
    "carro": 1
}

Para o resultado as palavras devem ser ordenadas 
da que apareceu mais vezes para que a apareceu
menos vezes.
*/
const path = require('path')
const fn = require('./utils')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

// Array de símbolos que deverão ser removidos
const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarConteudo)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeHouver('-->'))
    .then(fn.removerSeForNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarConteudo)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeForNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)