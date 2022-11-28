// setTimeout(function() {
//     console.log('Executando o callback')

//     setTimeout(function() {
//         console.log('Executando o segundo callback')
        
//         setTimeout(function() {
//             console.log('Executando o terceiro callback')
//         }, 2000)
//     }, 2000)
// }, 2000)

const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            console.log('Executando Promise....')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)