import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { store } from "./store/store";
import { createRouter, createWebHistory } from "vue-router";
import About from "./pages/About.vue";
import Home from "./pages/Home/Home.vue";
import Models from "./pages/Models/Models.vue";
import { firebaseApp } from "../firebase";
import { VueFire, VueFireAuth } from "vuefire";
import Login from "./pages/Login/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/models",
    component: Models,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
