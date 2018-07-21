<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <section class="cart-checkout">
            <div class="table-responsive">
              <table class="table table-cart" >
                <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>total</th>
                  <th></th>
                </tr>
                </thead>
                <transition-group tag="tbody" name="move-fade" >
                  <tr v-for="item in cartProducts" :key="item.id">
                    <td>
                      <div class="table-cart-product">
                        <figure class="table-cart-img">
                          <img :src="item.img" alt="item.title"/>
                        </figure>
                        <p class="table-cart-text">{{item.title}}</p>
                      </div>
                    </td>
                    <td>${{item.price}}</td>
                    <td>{{item.amount}}x</td>
                    <td>${{item.price * item.amount}}</td>
                    <td>
                      <button class="btn-close" @click="deleteCartItem(item)" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                      </button>
                    </td>
                  </tr>
                </transition-group>
              </table>
            </div>
          </section>
          <section class="cart-summary">
            <p class="cart-summary-price">Summary: <span>${{cartSum}}</span></p>
            <button @click="deleteCart" class="btn btn-light" type="button" aria-label="Clear cart list">Clear shopping cart</button>
            <router-link class="cart-summary-link" to="/" aria-label="Continue shopping" title="Continue shopping">Continue Shopping</router-link>
          </section>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
  import Footer from "../Footer/Footer";
  export default {
    name: "CartList",
    components: {Footer},
    methods: {
      deleteCartItem(item) {
        this.$store.dispatch("deleteCartItem", item.id)
      },
      deleteCart() {
        this.$store.dispatch("deleteCart");
      }
    },
    computed: {
      cartProducts() {
        return this.$store.getters.cartItems;
      },
      cartSum() {
        return this.$store.state.cart.cart.sum;
      }
    }
  }
</script>

<style lang="scss" src="./CartList.scss" scoped />