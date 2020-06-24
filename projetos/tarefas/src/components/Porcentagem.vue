<template>
    <div>
        <!-- INÍCIO - barra de % das tarefas -->
        <section class="tarefas">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group label">
                                    <h1 style="text-align: center">Tarefas</h1>
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {

    
    created() {
        console.log("created");
    },

    data() {
        return {
            tarefasConcluidas: 0,
        }
    },

    methods: {
        
    }

}
</script>

<style>


</style>