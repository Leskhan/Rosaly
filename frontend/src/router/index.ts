import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/pages/Main.vue')
  },
  {
    path: '/goods',
    component: () => import('../components/pages/Goods.vue')
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;