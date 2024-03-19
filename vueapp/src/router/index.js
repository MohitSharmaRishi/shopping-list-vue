import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import DashBoardView from '../views/DashBoardView.vue'
import ExpansesView from "@/views/ExpansesView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {    path: '/auth', name: 'home',component: AuthView  },
  {    path: '/expenses', name: 'expenses',component: ExpansesView  },
  //{    path: '/', name: 'dashboard',component: DashBoardView  },
  {    path: '/', name: 'dashboard',component: TestView  },

  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
