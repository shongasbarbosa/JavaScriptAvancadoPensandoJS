const carMarket = [
    { name: 'Caneta', amount: 10, price: 7.99, fragil: true },
    { name: 'Impressora', amount: 1, price: 649.50, fragil: true },
    { name: 'Caderno', amount: 4, price: 27.10, fragil: false },
    { name: 'Lapis', amount: 3, price: 5.82, fragil: false },
    { name: 'Tesoura', amount: 1, price: 19.20, fragil: true },
]

//1. fragil: true
//2. amount: 10, price: 27.10 -> total
//3. media dos totais
const returnMediaPriceFrageis = carMarket
    .filter(item => item.fragil)
    .map(item => item.amount * item.price)
    .reduce((a, el) => {
        const qtdContador = a.contador + 1
        const novoTotal = a.total + el
        return {
            contador: qtdContador,
            total: novoTotal,
            media: novoTotal / qtdContador
        }
    }, { contador: 0, total: 0, media: 0 })
    .media

const arredondando = parseFloat(returnMediaPriceFrageis.toFixed(2))
console.log(arredondando)
