<template>
    
    <v-toolbar>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <!-- to=  é igual ao router-link.
                Pertence ao vuetify -->
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portfolio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat @click="endDay">Finalizar Dia</v-btn>
            <v-menu offset-y>
                <!-- activator é do vuetify -->
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title @click="saveData">Salvar Dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-title @click="loadDataLocal">Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-layout align-center>
                <span class="text-uperrcase grey--text text-darken-2">
                    Saldo: {{ funds | currency }}
                </span>
            </v-layout>
        </v-toolbar-items>


    </v-toolbar>


</template>

<script>
import { mapActions } from 'vuex'

export default {

    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }, 

    methods: {
        ...mapActions(['randomizeStocks', 'loadData']),
        endDay() {
            this.randomizeStocks()
        },

        saveData() {

            console.log("saveData");

            // também poderia fazer 3 chamadas getter para cada método
            const { funds, stockPortfolio, stocks } = this.$store.getters

            // { } <= forma de criar um objeto com os 3 dados
            this.$http.put('data.json', { funds, stockPortfolio, stocks})
        },

        loadDataLocal() {
            this.loadData();
        }
    }

}
</script>

<style>

</style>