<template>
  <v-app>
 
    <Menu />
    
    <Toolbar />

    <Carousel />

    <Footer />

  </v-app>
</template>

<script>
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar.vue'
import Menu from './Menu.vue'

export default {

 components: {
   Footer,
   Carousel,
   Toolbar,
   Menu
 },
}
</script>
