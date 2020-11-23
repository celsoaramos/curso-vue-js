// let e const
{ 
    var a = 2
    let b = 3

    console.log(b)
}
// let você não consegue acessar fora do bloco
console.log(a)


// template String
const produto = 'ipad'
console.log(`${produto} é caro !`)

// Destructuring
const [l, e, ...tras] = "Cod3r"

console.log(l) // C
console.log(e) // o
console.log(tras) // d3r

const [x, y] = [1, 2, 3]
console.log(x, y) // 1 2

const [ax, ,ay] = [1, 2, 3]
console.log(ax, ay) // 1 3

const { age, name } = { name: 'Ana', age: 90}
console.log(age, name) // 90 Ana

const { age: idade, name: nome } = { name: 'Ana', age: 90}
console.log(idade, nome) // 90 Ana