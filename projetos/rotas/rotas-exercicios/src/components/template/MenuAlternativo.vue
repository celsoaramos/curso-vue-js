<template>
    <nav class="menu">
        <ul>
            <!-- exact é para colocar a class active somente quando a URL for exatamente igual -->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>
            <!-- sem o exact todas as URLS /usuario ficarão ativas, exemplo /usuario/34/editar -->
            <router-link to="/usuario" tag="li"  active-class="active">
                <a>User</a>
            </router-link>
 
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>