import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Protegido from '../pages/Protegido.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/protegido', component: Protegido },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
