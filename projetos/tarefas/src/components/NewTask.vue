<template>
    <div class="new-task">
        <input type="text" v-model="name" @keydown.enter="add" class="form-element" placeholder="Informe uma nova tarefa">
        <button class="form-element-button" @click="add">+</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: ''
        }
    },

    methods: {
        add() {
            this.$emit('taskAdded', { name: this.name})
            this.name = ''
        }
    }

}
</script>

<style>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline:none;
        font-size: 2rem;
        border: 1px solid #ffffff;
        padding: 5px 10px 8px;
        color: #ffffff;
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .form-element-button {
        outline:none;
        font-size: 2rem;
        border: 1px solid #ffffff;
        padding: 5px 10px 8px;
        color: #ffffff;
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

    }
</style>