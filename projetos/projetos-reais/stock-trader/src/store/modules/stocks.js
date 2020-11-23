import stocks from '@/data/stocks'

export default {

    state: {
        stocks: []
    },

    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },

        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.floor((Math.random() * 1000) + 1);
            })
        }
    }, 

    actions: {
        buyStock({commit}, order) {
            // buyStock é uma mutation de portfolio
            commit('buyStock', order)
        },

        initStocks({commit}) {
            commit('setStocks', stocks)
        },

        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },

    getters: {
        stocks(state) {
            return state.stocks
        }
    }


}