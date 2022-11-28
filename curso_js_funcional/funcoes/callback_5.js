const carMarket = [
    { name: 'Caneta', amount: 10, price: 7.99 },
    { name: 'Impressora', amount: 0, price: 649.50 },
    { name: 'Caderno', amount: 4, price: 27.10 },
    { name: 'Lapis', amount: 3, price: 5.82 },
    { name: 'Tesoura', amount: 1, price: 19.20 },
]
const getTotalPrice = item => item.amount * item.price
const somar = (a, b) => a + b

const totalGeral = carMarket
    .map(getTotalPrice)
    .reduce(somar)

console.log(totalGeral)