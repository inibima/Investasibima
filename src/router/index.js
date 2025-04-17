import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Steam from "../components/Steam.vue";
import Playstation from "../components/Playstation.vue";
import About from "../components/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/steam", name: "Steam", component: Steam },
  { path: "/playstation", name: "Playstation", component: Playstation },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;