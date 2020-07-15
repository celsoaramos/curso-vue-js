<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>

		<hr>
			<b-button variant='primary' class="mb-4" @click="exibir = !exibir">Mostrar mensagem</b-button>
		<hr>
		<!-- usando v-model e o bind no name com o :name -->
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<!-- out-in quer dizer que primeiro o elemento tem que sair para dps entrar a animação
		o key serve para o Vue sabe qual transition e animation deve executar -->
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant='info' show v-if='exibir' key="info">{{ msg }}</b-alert>
			<b-alert variant='warning' show v-else key="warn">{{ msg }}</b-alert>
		</transition>
 
		<hr>

		<!-- pode usar o v-show ao invés do v-if 
		     usa-se o v-show quando nao tem o v-else -->
		<transition name="fade">
			<b-alert variant='info' show v-show='exibir'>{{ msg }}</b-alert>
		</transition>

		<!-- o type="animation" significa que a animação é quem vai mandar no tempo -->
		<!-- no caso os dois estão com 2seg.. mas em tempos diferentes a animação é quem vai mandar -->
		<transition name="slide" type="animation">
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>
		</transition>

		<!-- o appear é para iniciar a transition e animation logo ao entrar na tela -->
		<transition name="slide" type="animation" appear>
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>
		</transition>

		<!-- usando o animate.css (CDN no index) -->
		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant='info' show v-if='exibir'>{{ msg }}</b-alert>
		</transition>

		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<!-- com o :css significa que o css não vai interferir na transição -->
		<transition
				:css="false"
				@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter"
				@enter-cancelled="enterCancelled"

				@before-leave="beforeLeave"
				@leave="leave"
				@after-leave="afterLeave"
				@leave-cancelled="leaveCancelled"
			>
			<div class="caixa" v-if="exibir2"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'" class="mr-2">Advertencia</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaInfo'" >Info</b-button>
		</div>

		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado" />
		</transition>

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar</b-button>

		<!-- verificar o slide-move no css e o position absolute no slide-leave-active -->
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, index) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(index)">
					{{ aluno }}
				</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>

import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {

	components: {
		AlertaAdvertencia,
		AlertaInfo
	},

	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo', 'Joao', 'Maria'],
			msg: 'Mensagem de info para o usuário',
			exibir: false,
			tipoAnimacao: "fade",
			exibir2: true,
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	}, 

	methods: {

		adicionarAluno() {
			const s = Math.random().toString(36).substring(2);
			this.alunos.push(s);
		},

		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},

		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				
				let novaLargura = 0;
				if (negativo) {
					novaLargura = this.larguraBase - rodada * 10
				} else {
					novaLargura = this.larguraBase + rodada * 10
				}

				el.style.width = `${novaLargura}px`
				rodada++

				if (rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},

		beforeEnter(el) {
			console.log('beforeEnter');
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			console.log('enter');
			this.animar(el, done, false)
		},
		afterEnter(el) {
			console.log("afterEnter");
		},
		enterCancelled() {
			console.log("enterCancelled");
		},
		beforeLeave(el) {
			console.log("beforeLeave");
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		afterLeave(el) {
			console.log("afterLeave");
		},
		leaveCancelled() {
			console.log("leaveCancelled");
		},
	}

}
</script>

<style>

@keyframes slide-in {
	from { transform: translateY(40px); }
	to   { transform: translateY(0); }
}
@keyframes slide-out {
	from { transform: translateY(0px); }
	to   { transform: translateY(40px); }
}
.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}
.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}
.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}


.fade-enter {
	opacity: 0;
}
.fade-enter-active {
	transition: opacity 2s;
}
.fade-enter-to {
	opacity: 1;
}

.fade-leave {
	opacity: 1;
}
.fade-leave-active {
	transition: opacity 2s;
}
.fade-leave-to {
	opacity: 0;
}




.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
