<template>
	
	<v-app>

		<Header />

		<v-content>
			<v-container>
				<!-- local onde exibirá os componentes -->
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>

</template>

<script>
import Header from './components/Header'

export default {

	components: {
		Header
	}

}
</script>

<style>

</style>

