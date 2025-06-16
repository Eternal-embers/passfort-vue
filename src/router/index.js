import { createRouter, createWebHistory } from 'vue-router'
import AuthenticationPage from '@/views/AuthenticationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authentication-page',
      component: AuthenticationPage,
    },
    {
      path: '/activate',
      name: 'activation-page',
      component: () => import('@/views/ActivationPage.vue'),
    }
  ],
})

export default router
