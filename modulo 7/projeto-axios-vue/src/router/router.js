import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import { isAuthenticated } from '@/services/auth'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next()
      } else {
        next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
