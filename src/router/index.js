import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('../components/AboutPage.vue')
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: () => import('../components/ProductsPage.vue')
    }
  ]
})

export default router
