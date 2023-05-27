<script setup lang="ts">
import { useRouter } from "vue-router";
import { MutationTypes } from "../../store/store";
import { useStore } from "../../store/store";

const store = useStore();
const router = useRouter();
const logOut = () => {
  store.commit(MutationTypes.LOG_OUT, undefined);
};
const navigateToLogin = (registerMode: boolean) => {
  if (registerMode)
    router.push({
      name: "Login",
      query: {
        registerModeDefault: "true",
      },
    });
  else router.push("/login");
};
</script>

<template>
  <div>
    <div class="btnCont">
      <button
        @click="navigateToLogin(false)"
        v-show="!store.state.isLoggedIn"
        class="loginBtn"
      >
        Sign in
      </button>
      <button
        @click="navigateToLogin(true)"
        v-show="!store.state.isLoggedIn"
        class="registerBtn"
      >
        Sign up
      </button>
      <button
        @click="logOut"
        v-show="store.state.isLoggedIn"
        class="registerBtn"
      >
        Log out
      </button>
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
