<template>

    <div>
        <ul>
            <li v-for="item in listaFrutas" :key="item">
                {{ item }}
            </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>

</template>

<script>
import frutasMixin from './frutasMixin'

export default {

    mixins: [
		frutasMixin
    ],
    
    created() {
        console.log('Created - Frutas.vue !!')
    }
}
</script>

<style>

</style>