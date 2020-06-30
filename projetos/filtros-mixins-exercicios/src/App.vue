<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}
		<!-- inverter é o filtro global em main.js -->
		<p>{{ cpf | mascaraCpf | inverter }}</p>
		<!-- não aceita v-model -->
		<input type="text" :value="cpf | mascaraCpf">

		<hr>
		<Frutas />

		<hr>
		<div>
			<ul>
				<li v-for="item in listaFrutas" :key="item">
					{{ item }}
				</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'
import Frutas from './Frutas'

export default {

	components: {
		Frutas,
	}, 

	mixins: [
		frutasMixin,
		usuarioMixin
	],

	filters: {
		mascaraCpf(valor) {
				// `${valor}`  <== dessa forma vai converter em String
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},

	data() {
		return {
			cpf: '10487715713',
		}
	},

	created() {
        console.log('Created - App.vue !!')
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

input {
	font-size: 2.5rem;
}
</style>
