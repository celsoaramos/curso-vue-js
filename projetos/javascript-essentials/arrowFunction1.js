let dobro = function (a) {
    return 2 * a
}

// função arrow sempre é anônima
// se quiser chamar a função arrow então será necessário armazenar numa variável
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI))


let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá'  // _ é um parametro mas nao precisa informar
console.log(ola())