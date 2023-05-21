<script lang="ts">
import Layout from "./components/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style scoped></style>
