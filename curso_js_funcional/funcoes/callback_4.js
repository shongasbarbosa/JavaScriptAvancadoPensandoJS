const carMarket = [
    { name: 'Caneta', amount: 10, price: 8.50 },
    { name: 'Impressora', amount: 0, price: 649.50 },
    { name: 'Caderno', amount: 4, price: 10 },
    { name: 'Lapis', amount: 3, price: 10 },
    { name: 'Tesoura', amount: 1, price: 19.20 },
]
const getName = item => item.name
const amountLargeZero = item => item.amount > 0

const nameItensValid = carMarket
    .filter(amountLargeZero)
    .map(getName)

console.log(nameItensValid)