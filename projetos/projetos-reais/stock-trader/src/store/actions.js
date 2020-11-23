// métodos que pertencem a mais de um módulo e faz sentido colocar em um arquivo mais "global"

import Vue from 'vue'

export default {
    loadData({commit}) {
        Vue.prototype.$http.get('data.json').then(resp => {
            const data = resp.data

            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}