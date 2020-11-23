// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))  // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
   nome,
   ola() {
      return 'Oi gente'
   }
}
console.log(pessoa.nome)  // Carla
console.log(pessoa.ola()) // Oi gente

// Class
class Animal {}
class Cachorro extends Animal {
   falar() {
      return 'Au au'
   }
}
console.log(new Cachorro().falar()) // Au au