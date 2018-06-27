import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home.vue'
import Shop from '@/Components/Shop/Shop.vue'
import Contact from '@/Components/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
