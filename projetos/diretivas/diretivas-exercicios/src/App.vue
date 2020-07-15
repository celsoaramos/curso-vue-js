<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretivas v-text '"></p>
		<p v-html="'Usando diretivas v-html <strong>negrito</strong>'"></p>
		<hr>
		
		<!-- diretiva, argumento, modificadores e valor 
		<p   v-teste:  argumento.mod1.mod2.mod3="valor"></p>
		-->
		
		<!--<p v-destaque>Usando diretiva personalizada GLOBAL em main .js </p>-->
		<p v-destaque:fundo="'lightblue'">Usando diretiva personalizada em main .js </p>
		<p v-destaque="cor">Usando diretiva personalizada em main .js </p>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada em main .js </p>

		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="cor">Usando diretiva personalizada local nesse arquivo</p>

		<!-- informando objeto para diretiva -->
		<p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, interval: 200 }">Usando diretiva personalizada local nesse arquivo</p>
		<p v-destaque-local.atrasar="{cor1: 'green', atraso: 5000 }">Usando diretiva personalizada local nesse arquivo</p>

		<hr>
		<!-- DESAFIO, escrever uma diretiva que funcione com v-on (escutar eventos) -->
		<button v-quando:click="acao">Executar</button>
		<p 
			v-quando:mouseenter="mouseEnter"
			v-quando:mouseleave="mouseLeave"
			>Teste MouseEvent </p>
	</div>
</template>

<script>
export default {
	
	directives: {

		'destaque-local': {
			bind(el, binding, vnode) {

				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}


				let atraso = 0

				if (binding.modifiers['atrasar']) {
					atraso = binding.value.atraso
				}

				if (binding.modifiers['alternar']) {
					
				}

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {

					if (binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.interval)
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso)
			}
		},

		'quando': {
			bind(el, binding) {
				//el.onclick = function(e) {
				//	binding.value()
				//}

				const tipo = binding.arg
				const fn = binding.value
				el.addEventListener(tipo, fn)
			}
		},
	},


	methods: {

		acao() {
			alert('Ação executada!');
		},
		mouseEnter() {
			console.log('Mouse Enter!');
		},
		mouseLeave() {
			console.log('Mouse Leave !');
		}
	},

	data() {
		return {
			cor: 'yellow'
		}
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
