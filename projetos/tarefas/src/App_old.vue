<template>
	<div id="tasks" class="app">
        
		<IncluirTarefas />

    </div>
</template>

<script>
import IncluirTarefas from './components/IncluirTarefas.vue'

export default {

	name: "tasks",
	components: { 
                IncluirTarefas
			},

    data() {
        return {
        }
    }
	
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
