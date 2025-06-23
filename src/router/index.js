import { createRouter, createWebHistory } from 'vue-router'
import AuthenticationPage from '@/views/AuthenticationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authentication-page',
      component: AuthenticationPage,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/activate',
      name: 'activation-page',
      component: () => import('@/views/ActivationPage.vue'),
      meta: {
        requiresAuth: true,
      },
    }
  ],
});

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !localStorage.getItem('token')) {
    // 如果需要认证但没有token，重定向到认证页面
    next({ name: 'authentication-page' });
  } else {
    // 如果不需要认证或有token，继续导航
    next();
  }
});

export default router
