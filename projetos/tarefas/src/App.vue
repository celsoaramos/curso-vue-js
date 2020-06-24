<template>
	<div id="app">
        
		<h1>Tarefas</h1>
		

		<TaskProgress :progress="progress" />

		<!-- recebe o evento emitido ($emit) do método add em NewTask.vue  -->
		<NewTask @taskAdded="addTask"></NewTask>

		<!-- envia através de props a lista de tarefas
		no componente TaskGrid tem que configurar a prop tasks (:tasks="tasks)
		
		@taskDeleted é o evento emitido ($emit) pelo componente TaskGrid, dessa forma
		vamos conseguir usar os dados em App.vue
		-->
		<TaskGrid :tasks="tasks" 
				  @taskDeleted="deleteTask" 
				  @taskStateChanged="toggleTaskState" />

    </div>
</template>

<script>

import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {

	name: "tasks",
	components: { 
				TaskGrid,
				NewTask,
				TaskProgress
			},

    data() {
        return {
			tasks: [
			]
        }
	},

	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0;
		}
	},
	
	watch: {
		tasks: {
			// realiza um watch profundo
			deep: true,
			handler() {
				// transforma a lista em String: JSON.stringify(this.tasks)
				// armazena em localStorage para armazenar os dados em localStorage
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},

	created() {
		// recupera do localStorage
		const json = localStorage.getItem('tasks')
		// transforma em array novamente, caso nao consiga coloca um array vazio
		this.tasks = JSON.parse(json) || []
	},

	methods: {
		addTask(task) {

			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0

			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}

		},

		deleteTask(task) {
			const index = this.tasks.indexOf(task);

			if (index >= 0) {
				this.tasks.splice(index, 1);
			}
		},

		toggleTaskState(index) {
			this.tasks[index].pending = !this.tasks[index].pending
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
