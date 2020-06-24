import Vue from 'vue'
export default new Vue({
    
    methods: {
        
        setPorcentagem(valor) {
            this.$emit('valorPorcentagem', valor)
        },

        getPorcentagem(callback) {
            this.$on('getValorPorcentagem', callback)
        }

    }
})