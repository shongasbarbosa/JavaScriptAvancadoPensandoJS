// 1. Usar uma promise para encapsular a chamada de um arquivo:
// usar o método readFile;
// 2. Usar o resultado dessa promise será o conteúdo do arquivo,
// quando a promise for atendida imprimir o que está dentro do arquivo.
const fs = require('fs')
const path = require('path')

const exibirConteudo = (caminho) => {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
            console.log('Depois de ler o arquivo')
        })        
    })
}

const caminho = path.join(__dirname, 'dados.txt')
exibirConteudo(caminho).then(conteudo => console.log(conteudo))