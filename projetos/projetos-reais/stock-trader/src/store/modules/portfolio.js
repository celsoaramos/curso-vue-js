import stocks from '@/data/stocks'

export default {

    state: {
        funds: 10000,
        stocks: []
    },

    // mutation pq esse método alterará o valor de stocks
    mutations: {
        // usando { } é possível pegar direto os valores de ordem ao invés do objeto
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)

            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }

            state.funds -= stockPrice * quantity
        },

        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)

            if (record. quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }

            state.funds += stockPrice * quantity
        },

        setPortfolio(state, portfolio) {
      
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }

    }, 

    actions: {
        sellStock({ commit }, order) {
            // primeiro parametro é o nome da mutation
            commit('sellStock', order)
        },
    },    
    getters: {
            // getters para pegar todos os getters da aplicação
            stockPortfolio(state, getters) {
                return state.stocks.map(stock => {
                    const record = getters.stocks.find(element => element.id == stock.id)

                    return {
                        id: stock.id,
                        quantity: stock.quantity,
                        name: record.name,
                        price: record.price
                    }
                })
            },

            funds(state) {
                return state.funds
            }
    }

}








