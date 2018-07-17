export default {
  state: {
    cart: {
      sum: 0,
      cartItems: [{
          id: 1,
          title: "Exploder II",
          price: 60000,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116655-0001.png"],
          amount: 1
        },
        {
          id: 2,
          title: "Lady-datejust",
          price: 1250,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116613lb-0005.png"],
          amount: 2
        },
        {
          id: 3,
          title: "Sky-Dweller",
          price: 40000,
          img: ["https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png"],
          amount: 1
        },
      ]
    }
  },
  getters: {
    cartItems(state) {
      return state.cart.cartItems;
    }
  },
  mutations: {
    deleteCartItem(state, cartItemId) {
      //Delete clicked cart item
      state.cart.cartItems.forEach((item, index) => {
        if (item.id === cartItemId) {
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
        img: item.images[0],
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
  }
}