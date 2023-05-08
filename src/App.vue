<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="h-full">
    <nav class="bg-teal-950 h-full">
      <!-- frontLayout -->
      <RouterLink to="/" class="block bg-teal-950 text-white text-lg p-4 hover:bg-teal-900"
        >FrontPage</RouterLink
      >
      <RouterLink to="/dashBoard" class="block bg-teal-950 text-white text-lg p-4 hover:bg-teal-900"
        >DashBoard</RouterLink
      >
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 150px;
  line-height: 1.5;
  height: 100vh;
  position: relative;
  left: 0;
}
* {
  background-color: #000;
}
</style>
