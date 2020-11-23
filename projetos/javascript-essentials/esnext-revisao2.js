// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3)) // 5


const soma2 = (a, b) => {
   return a + b
}
console.log(soma2(2, 3)) // 5

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() // Node
log('Sou mais forte') // Sou mais forte

// operador rest ou spread
function total(...numeros) {
   let total = 0
   numeros.forEach(n => total += n)
   return total
}
console.log(total(2, 3, 4, 5)) // 14