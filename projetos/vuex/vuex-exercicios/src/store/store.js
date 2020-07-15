import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({


    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },

    // o state terá que ser acessado:
    // this.$store.state.carrinho.produtos
    // this.$store.state.parametros.preco
    // dessa forma que utilizamos no carrinho e na loja
    modules: { carrinho, parametros },

    // getters,
    // ou
    // getters: getters
    // ou
    getters: {
        ...getters
    }
   
})