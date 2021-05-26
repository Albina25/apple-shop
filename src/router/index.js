import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Category_iPod from '../views/Category_iPod.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog,
    props: true
  },
  {
    path: '/catalog/category_iPod',
    name: 'category_iPod',
    component: Category_iPod,
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
