import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import DragAndDrop from "./pages/DragAndDrop.vue"
import Calculator from "./pages/Calculator.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/draganddrop", component: DragAndDrop },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
