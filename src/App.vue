<template>
  <Navbar v-bind:links="links"/>
  <!-- <Form /> -->
  <router-view />
  <!-- <Footer /> -->
</template>

<script>
import Navbar from './components/Navbar'
// // import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data(){
    return {
      links:[{text:'Home',url:"/"}, {text:'Formulario',url:"/formulario"}, {text:'Listado',url:"/listado"}]
    }
  }
}
</script>

<style src="./index.css" />