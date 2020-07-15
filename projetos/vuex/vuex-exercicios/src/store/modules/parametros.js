export default {
     // faz o papel do data
     state: {
        quantidade: 21,
        preco: 19.99
    },

    // como se fosse um setter
    // mutation só pode passar um parâmetro no máximo (além do state)
    // objetivo da mutation é alterar estado
    mutations: {

        setQuantidade(state, payload) {
            state.quantidade = payload
        },

        setPreco(state, payload) {
            state.preco = payload
        }
    },
}