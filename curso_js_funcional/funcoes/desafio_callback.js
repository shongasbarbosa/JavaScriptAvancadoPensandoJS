/* Criar duas funções map para:
- Gerar um array só com os nomes dos produtos;
- Gerar um array com o resultado da quantidade pelo preço.
*/

const carMarket = [
    { name: 'Caneta', amount: 10, price: 8.50 },
    { name: 'Impressora', amount: 0, price: 649.50 },
    { name: 'Caderno', amount: 4, price: 10 },
    { name: 'Lapis', amount: 3, price: 10 },
    { name: 'Tesoura', amount: 1, price: 19.20 },
]

const getName = item => item.name
const products = carMarket.map(getName)
console.log(products)

const getTotal = item => item.amount * item.price
const priceProduct = carMarket.map(getTotal)
console.table(priceProduct)