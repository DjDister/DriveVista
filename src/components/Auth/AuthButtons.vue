<script setup lang="ts">
import { useStore } from "../../store";

const store = useStore();
</script>

<template>
  <div>
    <div v-show="!store.state.isLoggedIn" class="btnCont">
      <button class="loginBtn">Sign in</button>
      <button class="registerBtn">Sign up</button>
    </div>
  </div>
</template>

<style scoped>
button {
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border: unset;
  background-color: inherit;
}

.btnCont {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.loginBtn:hover {
  color: #ffc300;
}
.registerBtn {
  background-color: #ffc300;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0px 0px 0px 2px #ffd60a;
}
</style>
