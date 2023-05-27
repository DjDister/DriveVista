import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { store } from "./store";
import { createRouter, createWebHistory } from "vue-router";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Models from "./pages/Models/Models.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/models",
    component: Models,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
