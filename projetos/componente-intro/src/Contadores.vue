<template>

  <div class="contadores">
    <h1>Contadores</h1>
    <app-contador v-for="c in 5" :key="c"></app-contador>
    <button>?</button>
  </div>


</template>

<script>
// registro de forma local o componente Contador
import Contador from './Contador.vue'

export default {
    
    components: {
      'app-contador': Contador
    },

    

}
</script>

<style scoped>


</style>