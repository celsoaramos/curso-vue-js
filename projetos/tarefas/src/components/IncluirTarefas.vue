<template>
    <div>

        <Porcentagem>
            <div class="progress" style="height: 35px;">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        :style="{'width': valorPorcentagem+'%'}"  aria-valuemin="0" aria-valuemax="100">{{ valorPorcentagem }}%
                </div>
            </div>
            <h6 style="text-align: center">{{ this.valorPorcentagem }}</h6>
        </Porcentagem>

		<br/><br/>

        <section class="incluirTarefas">
            <div class="container">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <input type="text" v-model="nomeTarefa" @keyup.enter="incluirTarefa" class="form-control"  placeholder="Nome da tarefa">
                            <div class="input-group-append">
                                <button @click="incluirTarefa" name="incluirTarefa" id="incluirTarefa" class="btn btn-info ">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </section>

        <!-- INÍCIO - mensagem erro -->
        <section class="mensagemErro" v-if="mensagemErro">
            <div class="container alinhar-container">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-danger"  >
                                    {{ mensagemErro }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- FIM - msg erro -->


        <section class="listaTarefas" v-if="listaTarefas">
            <div class="container">
                <div class="row">
                    <div class="card col-3 text-white" :class="item.classe" v-for="(item, index) in listaTarefas" v-bind:key="index"  >
                        <div class="card-body"  @click="concluirTarefa(index)" :style="item.estilo">{{ item.nome }}</div>
                        <button @click="excluir(index)" class="btn btn-info">Excluir</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Porcentagem from './Porcentagem.vue'
import barramento from '@/barramento'

export default {

    components: {
        Porcentagem
    },

    data() {
        return {
            nomeTarefa: '',
            listaTarefas: [{
                classe: '',
                nome: '',
                estilo: ''
            }],
            numeroTarefasconcluidas: 0,
            mensagemErro: '',
            valorPorcentagem: 0,
        }
    },

    created() {
                this.listaTarefas = new Array();
            },

    methods: {
        incluirTarefa() {
            
            this.mensagemErro = '';

            if(this.listaTarefas.some(item => item.nome === this.nomeTarefa)) {
                this.mensagemErro = "Já existe tarefa com o nome: " + this.nomeTarefa;
            } else {
                this.listaTarefas.push({classe: 'bg-danger', nome: this.nomeTarefa, estilo: 'text-decoration: none' });
            }

            this.nomeTarefa = '';
            this.calcularTarefa();
        },

        excluir(index) {
            this.listaTarefas.splice(index, 1);
        },

        concluirTarefa(index) {

            this.listaTarefas[index].classe = 'bg-success';
            this.listaTarefas[index].estilo = ' text-decoration: line-through;';

            this.calcularTarefa();
        },

        calcularTarefa() {
            this.numeroTarefasconcluidas = this.numeroTarefasconcluidas + 1;

            var valorUnitario = 100 / this.listaTarefas.length;

            this.valorPorcentagem = valorUnitario * this.numeroTarefasconcluidas;

            console.log("valor: " + this.valorPorcentagem);
            //barramento.setPorcentagem(this.valorPorcentagem);
        }

    },

    computed: {
       
    }

}
</script>

<style>


</style>