function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {}
}

setInterval(() => console.log('Execução #01'), 400)
setTimeout(() => {
    esperarPor(3000)
    console.log('Execução #02')
}, 300)

esperarPor(5000)
console.log('Fim!')