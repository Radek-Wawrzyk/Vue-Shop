import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home/Home.vue'
import Shop from '@/Components/Shop/Shop.vue'
import ShopItemPage from '@/Components/Shop/Shop Item Page/ShopItemPage.vue'
import Contact from '@/Components/Contact/Contact.vue'
import CartList from '@/Components/Cart List/CartList.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior (to, from) {
    return { x: 0, y: 0 }
  },
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
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: ShopItemPage
    },
    {
      path: '/cart',
      name: "Cart",
      component: CartList
    }
  ]
})
