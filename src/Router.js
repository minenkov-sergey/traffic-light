import Light from "./components/Light.vue";
import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';

const router = createRouter({
  base: '/',
  mode: 'history',
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/red', component: Light },
    { path: '/red', component: Light },
    { path: '/yellow', component: Light },
    { path: '/green', component: Light }
  ]
});

export default router;