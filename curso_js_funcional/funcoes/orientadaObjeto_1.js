function Produto (nome, preco, desconto = 0.50) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Caneta', 10)
console.log(`O produto: ${p1.nome} de R$${p1.preco},00.
com desconto de 50% fica por apenas
R$${p1.precoFinal()},00`)