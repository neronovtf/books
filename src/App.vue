<template>
  <div id="app">
    <VueHead/>
    <VueBody/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VueHead from './components/VueHead.vue'
import VueBody from './components/VueBody.vue'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    VueHead,
    VueBody
  },

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap&subset=latin-ext,vietnamese');
  body{
    font-family: 'Quicksand', sans-serif;
    margin: 0px;
    padding: 0px;
  }
</style>
