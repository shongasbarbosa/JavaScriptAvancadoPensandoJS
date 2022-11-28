const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
console.log(caminho)

const exibirConteudo = (_, conteudo) => {
    console.log(conteudo.toString())
}

fs.readFile(caminho, exibirConteudo)
// Corpo a função direto no parâmetro callback usando arrow function
// fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))

// Passando a função como Sincrona
// const consteudo = fs.readFileSync(caminho)
// console.log('Sincrona: ', consteudo.toString())