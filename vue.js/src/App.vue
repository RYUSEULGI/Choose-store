<template>
  <div id="app">
    <Calculator/>
    <router-view/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  components: { Calculator },
  name: 'App'
}
</script>

<style>
</style>
