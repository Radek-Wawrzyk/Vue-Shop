import Vue from 'vue'
import Vuex from 'vuex'

import products from './Modules/products'
import common from './Modules/common'
import cart from './Modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    cart,
    products
  }
})