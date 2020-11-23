const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

// aqui o funcao falar é chamado direto de pessoa
pessoa.falar()

const falar = pessoa.falar
// aqui o falar chamado da constante falar
falar() // conflito entre mundo funcional e OO

// bind passa o objeto onde quer que seja resolvido o this
// ou seja, o this será executado a partir de pessoa (parametro enviado)
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

