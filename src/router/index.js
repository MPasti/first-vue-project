import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = async (to, from, next) => {
  const authenticated = true
  if (!authenticated) {
    return next('/sem_acesso')
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HomePage.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('../components/AboutPage.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: () => import('../components/ProductsPage.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/contato',
      name: 'Contato',
      component: () => import('../components/ContactPage.vue'),
      beforeEnter: isAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/LoginPage.vue')
    }
  ]
})

export default router
