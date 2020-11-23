const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad PRO', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

// filtra os itens de acordo com os testes.
// retorna o que for true SEM alterar a lista original

// filtro maior que 500
const preco = p => p.preco >= 500
// filtro fragil
const fragil = p => p.fragil

console.log(produtos.filter(preco).filter(fragil))