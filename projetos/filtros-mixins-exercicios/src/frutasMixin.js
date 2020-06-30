export default {
    data() {
        return {
            fruta: '',
            listaFrutas: ['banana', 'maça', 'laranja']
        }
    },

    methods: {
        add() {
            this.listaFrutas.push(this.fruta)
            this.fruta = ''
        }
    }
}