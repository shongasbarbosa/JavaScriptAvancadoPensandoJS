// Importar função require
const fs = require('fs')
const path = require('path')

// Método para ler o caminho dor arquivo
const lerDiretorio = (caminho) => {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho).map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })
}

// método que filtra pelo último elemento, nesse caso, a extensão do arquivo
function elementosTerminadosCom(padraoTextual) {
    return function(array) {
        return array.filter(item => item.endsWith(padraoTextual))
    }
}

// Método para ler um arquivo
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
           const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' }) 
           resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    })
}

// Método para mapear todos os arquivos e ler o que tem dentro de cada um destes
function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

// Método para remover  os espaços vazios da string
function removerSeVazio(array) {
    // trim - função js para retirar espaços vazios da string
    return array.filter(el => el.trim())
}

// Método para remover do array se incluir algum caracter
function removerSeHouver(padraoTextual) {
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

// Método para remover linhas com apenas números
function removerSeForNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

// Método para remover caracteres especiais
function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(item => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, item)
        })
    }
}

// Método para juntar conteúdos
const mesclarConteudo = conteudos => conteudos.join(' ')

// Método para separar por palavra ou por linha em branco
function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

// Função para agrupar os elementos em um Objeto
function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const p = palavra.toLowerCase()
        const qtde = acc[p] ? acc[p].qtde + 1 : 1
        acc[p] = { elemento: p, qtde}
        
        return acc
    }, {}))
}

// Função para ordenar o array de elementos
function ordenarPorAtributoNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (obj1, obj2) => obj1[attr] - obj2[attr]
        const desc = (obj1, obj2) => obj2[attr] - obj1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

// Exportar as funções para reutilizar em outros projetos
module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removerSeHouver,
    removerSeForNumero,
    removerSimbolos,
    mesclarConteudo,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtributoNumerico
}