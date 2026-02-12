import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'
import AgbView from '../views/AgbView.vue'
import TicketView from '../views/TicketView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  },
  {
    path: '/agb',
    name: 'agb',
    component: AgbView
  },
  {
    path: '/tickets/:city',
    name: 'tickets',
    component: TicketView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
