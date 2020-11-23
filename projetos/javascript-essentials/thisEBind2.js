function Pessoa() {
    this.idade = 0

    // para que a funcao dentro de setInterval use corretamente o this
    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

new Pessoa

// funcionaria se o setInterval fosse com arrow function:
setInterval(() => {
    this.idade++
    console.log(this.idade)
}, 1000)
