<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<input type="text" v-model="nome" name="" id="">
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ nome | espacoPorVirgula }}</p>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<hr>
		<p>{{ nome | contarPalavras }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<p>{{ nomePorVirgula }}</p>
		<p>{{ fraseTamanho }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<hr>
		<p>{{ nomePorVirgulaMixin }}</p>
		<p>{{ fraseTamanhoMixin }}</p>
	</div>
</template>

<script>
import nomeVirgulaMixin from './nomeVirgulaMixin'
export default {
	
	filters: {
		espacoPorVirgula(valor) {
			// valor.replace(/\s/g, '') <-- com regex
			return valor.split(' ').join(',')
		}
	},

	mixins: [
		nomeVirgulaMixin
	],

	data() {
		return {
			nome: 'Celso de Araujo Ramos'
		}
	},

	computed: {
		nomePorVirgula() {
			return this.nome.split(' ').join(',')
		},

		fraseTamanho() {
			return this.nome.split(' ').map(p => `${p} (${p.length})`).join(' ')
		},
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
