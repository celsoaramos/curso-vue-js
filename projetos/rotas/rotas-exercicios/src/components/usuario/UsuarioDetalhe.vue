<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>

        <!-- primario está no style.css como [primario]  -->
        <router-link    primario 
                        tag="button" 
                        :to="{  name: 'editarUsuario', params: { id: id }, 
                                query: { completo: true, lingua: lingua },
                                hash: '#rodape'}">
        <!-- <router-link tag="button" primario :to="{ name: 'EditarUsuario', params: { id: $route.params.id } }">  -->
        <!-- ou  <router-link tag="button" primario :to="`/usuario/${id}/editar`"> -->
        <!-- ou <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`"> -->
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: [ 'id'],

    // é executado antes do componente ser renderizado, ou nao seja nao tem props, nem data
    beforeRouteEnter(to, from, next) {
        console.log('dentro do componente Usuario detalhe')
        next()
        /*
        next(vm => {
            vm.id
        })
        */
        const autenticado = true
        autenticado ? next() : next(false)
    }, 

    data() {
        return {
            lingua: 'Portuga'
        }
    },
    /*
    data() {
        return {
        id: this.$route.params.id,
        lingua: 'Portuga'

        }
    },

    watch: {
        $route(to, from) {
        this.id = to.params.id
        }
    },
    */
   
}
</script>

<style>

</style>