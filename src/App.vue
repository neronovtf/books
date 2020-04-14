<template>
  <div id="app">
    <VueHead/>
    <VueBody/>
    <VuePopup/>
    <VueBottom/>
  </div>
</template>

<script>
import VueHead from './components/VueHead.vue'
import VueBody from './components/VueBody.vue'
import VueBottom from './components/VueBottom.vue'
import VuePopup from './components/VuePopup.vue'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    VueHead,
    VueBody,
    VuePopup,
    VueBottom
  },

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap&subset=latin-ext,vietnamese');
  body, input, textarea{
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    outline: none;
  }
</style>
