const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array apenas com os preços

// primeiro transforma o json em objeto
const paraObjeto = json => JSON.parse(json)
// para dps pegar o preço no objeto
const apenasPreco = produto => produto.preco

// chama os maps para transformar para objeto e dps pegar o preço 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5 ]


