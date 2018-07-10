import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Day-Date 40",
        price: 3526,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png"
      },
      {
        id: 2,
        title: "Sky-Dweller",
        price: 2531,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png"
      },
      {
        id: 3,
        title: "Datejust 41",
        price: 56525,
        categories: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png"
      },
      {
        id: 4,
        title: "Lady-Datejust 28",
        price: 1224,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png"
      },
      {
        id: 5,
        title: "Submariner Date",
        price: 2678,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116900-0001.png"
      },
      {
        id: 6,
        title: "Air-King",
        price: 35000,
        categories: {
          strap: "metal",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png"
      },
      {
        id: 7,
        title: "Explorer II",
        price: 35000,
        categories: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116519ln-0024.png"
      },
      {
        id: 8,
        title: "GMT-Master",
        price: 23456,
        categories: {
          strap: "rubber",
          shape: "circle",
          style: "sport",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png"
      },
      {
        id: 9,
        title: "Celinni",
        price: 43100,
        categories: {
          strap: "leather",
          shape: "circle",
          style: "elegant",
          type: "analogue",
        },
        img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png"
      }
    ],
    cart: {
      sum: 0,
      cartItems: [
        {
          id: 1,
          title: "Exploder II",
          price: 60000,
          img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png",
          amount: 1
        },
        {
          id: 2,
          title: "Lady-datejust",
          price: 1250,
          img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png",
          amount: 2
        },
        {
          id: 3,
          title: "Sky-Dweller",
          price: 40000,
          img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png",
          amount: 1
        },
      ]
    },
    activeClasses: {
      settings: false,
      cart: false
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.cartItems;
    },
    productsData(state) {
      return state.products;
    },
    toggleCartStatus(state) {
      return state.activeClasses.cart;
    },
    toggleSettingsStatus(state) {
      return state.activeClasses.settings;
    }
  },
  mutations: {
    deleteCartItem(state, cartItemId) {
      //Delete clicked cart item
      state.cart.cartItems.forEach((item, index) => {
        if (item.id === cartItemId ) {
          state.cart.cartItems.splice(index, 1);
        }
      });

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    addToCart(state, item) {
      //Define cart object
      const cartItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        amount: item.amount
      };

      //Push object to cart
      state.cart.cartItems.push(cartItem);

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    deleteCart(state) {
      state.cart.cartItems.splice(0, state.cart.cartItems.length);

      //Update amount of cart
      state.cart.sum = 0;
      state.cart.cartItems.forEach(item => {
        state.cart.sum += item["price"] * item.amount;
      });
    },
    toggleCart(state, status) {
      state.activeClasses.cart =! state.activeClasses.cart;
      state.activeClasses.settings = false;
    },
    toggleSettings(state, status) {
      state.activeClasses.settings =! state.activeClasses.settings;
      state.activeClasses.cart = false;
    }
  },
  actions: {
    deleteCartItem(event, cartItemId) {
      event.commit("deleteCartItem", cartItemId);
    },
    addToCart(event, item) {
      event.commit("addToCart", item);
    },
    deleteCart(event) {
      event.commit("deleteCart");
    },
    toggleCart(event, status) {
      event.commit("toggleCart", status);
    },
    toggleSettings(event, status) {
      event.commit("toggleSettings", status);
    }
  }
})
