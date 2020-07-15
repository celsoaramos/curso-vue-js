export default {

    namespaced: true,
    
     // faz o papel do data
     state: {
        produtos: [],
    },

    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                                 .reduce((total, atual) => total + atual, 0)
        }
    },

    // como se fosse um setter
    // mutation só pode passar um parâmetro no máximo (além do state)
    // objetivo da mutation é alterar estado
    mutations: {
        // payload é um nome convencional mas pode ser qq nome
        // no caso, payload é o produto.
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },

    // local correto para chamar o backend
    // local correto para fazer alguma alteração mais
    // ideal para chamar regras de negócios
    actions: {

        // payload é um nome convencional mas pode ser qq nome
        // no caso, payload é o produto.
        adicionarProduto({ commit }, payload) {

            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        },

        // se informar o root: true, então essa action passa a ser global
        // e não mais somente do módulo.
        // logo para chamar não precisará informar 'carrinho' que é o namespaced
        // se o root for true, então poderá chamar dessa forma
        // ...mapActions(['adicionarProduto']),
        adicionarProduto2: {
            root: true,
            handler({ commit }, payload) {

                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }
}