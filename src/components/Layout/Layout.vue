<script setup lang="ts">
import Footer from "./Footer/Footer.vue";
import Navbar from "./Navbar/Navbar.vue";
</script>

<template>
  <div class="container"><Navbar /><slot></slot><Footer /></div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f7f7f7;
}
</style>
