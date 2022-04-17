import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/AboutView.vue')
  },
{
  path: '/contact',
  name: 'contact',
  component: () => import(/* webpackChunkName: "contact" */ '../views/contact.vue')
},
{
  path: '/food',
  name: 'food',
  component: () => import(/* webpackChunkName: "contact" */ '../views/food.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
