const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// separa em um novo array só com as notas
console.log(alunos.map(a => a.nota))  // [ 7.3, 9.2, 9.8, 8.7 ]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    // na primeira chamada o acumulador é o primeiro valor
    // na segunda chamada o acumulador é a soma do primeiro valor com o segundo valor
    // na terceira chamada é o valor da soma anterior com o próximo elemento
    // atual é o segundo valor na primeira chamada e dps é o próximo elemento
    console.log(acumulador, atual) // 7.3 9.2
                                   // 16.5 9.8
                                   // 26.3 8.7
    return acumulador + atual // 35
})

console.log(resultado)



const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    // na primeira chamada o acumulador é o valor informado mais abaixo, 10
    // na segunda chamada o acumulador é a soma do valor informado com o primeiro valor
    // atual é o primeiro valor na primeira chamada e dps é o próximo elemento
    console.log(acumulador, atual) // 10 7.3
                                   // 17.3 9.2
                                   // 26.5 9.8
                                   // 36.3 8.7
    return acumulador + atual // 45
}, 10)

console.log(resultado2)