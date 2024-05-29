<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div id="app">
    <MainHeader />
    <main></main>
    <MainFooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
