<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" 
                @input="alterarNome"
                :value="value.nome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" 
                @input="alterarSobrenome"
                :value="value.sobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo'

export default {

    components: {
        Rotulo
    },

    data() {
        return {

      }
    },

    // o nome da props tem que ser value pq está passando o v-model
    props: {
        value: {
            type: Object,
            required: true
        }
    },

    methods: {
        alterarNome(event) {
            this.$emit('input', { nome: event.target.value, sobrenome: this.value.sobrenome})
        },

        alterarSobrenome(event) {
            this.$emit('input', { nome: this.value.nome, sobrenome: event.target.value})
        }
    }

}
</script>

<style scoped>

    .botao {
        position: absolute;
        margin: 0px 5px;
        height: 25px;
        width: 25px;
        border-radius: 14px;
        background: #FFF;
        box-shadow: 0px 0px 5px #000B;
    }

</style>
