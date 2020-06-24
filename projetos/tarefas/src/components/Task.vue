<template>
    <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
        <!-- o .stop faz que com evento não seja propagando para os outros componentes, ou seja, o click acima não será
        executado -->
        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <p> {{ task.name }} </p>
    </div>
</template>

<script>
export default {

    props: {
        task: { type: Object, required: true }
    },

    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }

}
</script>

<style>
    .task {
        box-sizing: border-box;
        width: 350px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>