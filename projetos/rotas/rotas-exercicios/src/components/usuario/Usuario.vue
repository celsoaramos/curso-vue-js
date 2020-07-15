<template>
  <div class="usuario">
      <h2>Usuários</h2>
      <hr>

      <!-- vai carregar aqui dentro todas as sub-urls de Usuario (UsuarioLista, UsuarioDetalhe e UsuarioEditar) -->
      <!-- todas as rotas estão em router.js -->
      <router-view />
      <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {

  methods: {
    irParaInicio() {
      // this.$router.push('/')
      // this.$router.push({ path: '/' })
      this.$router.push({ name: 'inicio' })
    }
  }

}
</script>

<style>

</style>