<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
        }
    },

    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },

        preco() {
            return this.$store.state.parametros.preco
        }
    },

    methods: {

        //...mapMutations(['adicionarProduto']),
        // o spread (...) vai criar um método chamado adicionarProduto 
        // e assim você poderá usar this.adicionarProduo:
        // this.adicionarProduto(produto)
        // 'carrinho' é o nome do modulo pq foi configurado como namespaced
        ...mapActions('carrinho', ['adicionarProduto']),

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // comentário para não gerar warning no console
            // eslint-disable-next-line
            console.log(produto)

            // pode fazer assim
            // this.$store.state.produtos.push(produto)
            // ou usando mutation
            // this.$store.commit('adicionarProduto', produto)
            // ou
            //this.$store.dispatch('adicionarProduto', produto)
            // ou 
            // ou usando mapMutations / mapActions
            this.adicionarProduto(produto)

            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
