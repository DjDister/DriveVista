<script setup lang="ts">
import CarSignal from "../../Icons/CarSignal.vue";
</script>

<template>
  <router-link to="/" class="logo-cont">
    <CarSignal size="64px" color="#FFD60A" />
    <div class="logo-title">
      <h1>Drive</h1>
      <text>Vista</text>
    </div>
  </router-link>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.logo-cont {
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo-title {
  margin-left: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo-title h1 {
  font-size: 2rem;
  color: #003566;
  margin: 0;
  margin-bottom: -10px;
}
.logo-title text {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
