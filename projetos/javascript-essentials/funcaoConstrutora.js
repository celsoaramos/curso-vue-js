function Carro(velocidadeMaxima = 200, delta = 5)  {
    // atributo privado
    // USAR LET ao invés do var !
    // pode usar const também 
    // const e let tornam o atributo privado
    let velocidadeAtual = 0

    // método público por causa do this
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico por causa do this que retorna o atributo privado
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)   // função
console.log(typeof ferrari) // objeto