const primeiroElemnto = (array) => array[0]

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemnto)
    .then(console.log)