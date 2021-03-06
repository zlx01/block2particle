import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Particle from '@/views/Particle.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Particle',
    component: Particle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
