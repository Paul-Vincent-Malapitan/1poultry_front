import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import UserManagement from '../views/UserManagement.vue'
import BranchManagement from '../views/BranchManagement.vue'
import Inventory from '../views/InventoryManagement.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  { path: '/user', name: 'user', component: UserManagement },
  { path: '/branch', name: 'branch', component: BranchManagement },
  { path: '/inventory', name: 'inventory', component: Inventory },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
