import { createWebHistory, createRouter } from "vue-router";
import Form from './pages/Formulario'
import Login from './pages/Login'
import Listado from './pages/Listado'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: Form,
  },
  {
    path: "/listado",
    name: "Listado",
    component: Listado,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;