import Vue from 'vue'
import Vuex from 'vuex'

import Products from './Modules/products'
import Common from './Modules/common'
import Cart from './Modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:
  {
    Common,
    Cart,
    Products
  }
})