<template>
  <li class="navigation-icons-item">
    <button class="navigation-icon" :aria-expanded="isCartToggled ? 'true' : 'false'" :class="{'active' : isCartToggled}" @click="toggleCart" aria-label="Toggle Cart" aria-controls="cart" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
      <transition name="fade">
        <span v-if="cartItems.length" class="cart-counter">{{cartItems.length}}</span>
      </transition>
    </button>
    <transition name="fade">
      <div class="cart-dropdown" v-if="isCartToggled" id="cart">
        <transition-group class="cart-list" tag="ul" name="fade-cart" appear >
          <li class="cart-item" v-for="item in cartItems" :key="item.id" >
            <figure class="cart-photo">
              <img v-bind:src="item.img" :alt="item.title" />
            </figure>
            <div class="item-content">
              <p class="item-content-title">{{item.title}}</p>
              <p class="item-content-price">${{item.price}}</p>
              <p class="item-content-amount">{{item.amount}}x</p>
            </div>
            <button aria-label="Remove Item from Cart" class="button-close" type="button" @click="deleteItem(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
            </button>
          </li>
        </transition-group>
        <section class="cart-summary">
          <transition name="fade">
            <p class="cart-summary-blank" v-if="cartItems.length === 0">
              There is no products in cart
            </p>
          </transition>
          <p class="cart-summary-text">Total</p>
          <p class="cart-summary-price">{{sum}}$</p>
          <button class="btn btn-cart-submit" type="button">Checkout</button>
        </section>
      </div>
    </transition>
  </li>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        isCartToggled: false,
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
        ],
        sum: 0
      }
    },
    methods: {
      deleteItem: function (e) {
        this.cartItems.forEach((item, index) => {
          if (item.id === e) {
            this.cartItems.splice(index,1);
          }
        });
        this.sum = 0;
        this.cartItems.forEach(item => {
          this.sum += item["price"] * item.amount;
        });
      },
      toggleCart: function () {
        this.isCartToggled =! this.isCartToggled;
      }
    },
    mounted: function () {
      this.cartItems.forEach(item => {
        this.sum += item["price"] * item.amount;
      });
    },
  }

</script>

<style lang="scss" src="./Cart.scss" />
