function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // aceia um único parametro !
            // pode passar um objeto com N atributos
            resolve(frase)
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?!?!'))
    .then(outraFrase => console.log(outraFrase)) // Que legal?!?!?!
    .catch(e => console.log(e)) // para tratar erro