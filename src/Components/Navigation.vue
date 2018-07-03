<template>
  <nav class="navigation-container">
    <figure class="navigation-logo">
      <router-link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPB8zAHXMcSxKjEZNfym4sYcRVKFHoBJNwUGz-UBAjnV2w90fug" alt="logo">
      </router-link>
    </figure>
    <ul v-bind:aria-expanded="{isMenuToggled}" v-bind:class="{'menuToggled': isMenuToggled}" class="navigation-menu">
      <li v-on:click="toggleMenu" class="navigation-item">
        <router-link aria-label="Home Page" to="/">Home </router-link>
      </li>
      <li v-on:click="toggleMenu" class="navigation-item">
        <router-link aria-label="Shop Page" to="/shop">Shop </router-link>
      </li>
      <li v-on:click="toggleMenu" class="navigation-item">
        <router-link arial-label="About us" to="/about">About </router-link>
      </li>
      <li v-on:click="toggleMenu" class="navigation-item">
        <router-link aria-label="Contact Us" to="/contact">Contact </router-link>
      </li>
    </ul>
    <ul class="navigation-icons">
      <li class="navigation-icons-item">
        <button aria-label="Open Mobile Menu" v-bind:class="{'active' : isMenuToggled}" v-on:click="toggleMenu" class="navigation-hamburger">
          <span class="hamburger-segment" />
        </button>
      </li>
      <li class="navigation-icons-item">
        <button class="navigation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
        </button>
      </li>
      <li class="navigation-icons-item">
        <button v-bind:class="{'active' : isCartToggled}" v-on:click="toggleCart" class="navigation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
        </button>
        <transition name="fade">
          <div v-if="isCartToggled" class="cart-dropdown">
            <ul class="cart-list">
              <li class="cart-item">
                <img class="product-photo" src="http://placehold.it/80x80" />
                <div class="item-content">
                  <label class="item-title">Crackle Plates</label>
                  <p class="item-price">22.50$</p>
                  <p class="item-quantity">x2</p>
                </div>
                <button aria-label="Remove Item from Cart" class="button-close" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                </button>
              </li>
              <li class="cart-item">
                <img class="product-photo" src="http://placehold.it/80x80" />
                <div class="item-content">
                  <label class="item-title">Crackle Plates</label>
                  <p class="item-price">22.50$</p>
                  <p class="item-quantity">x2</p>
                </div>
                <button aria-label="Remove Item from Cart" class="button-close" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                </button>
              </li>
              <li class="cart-item">
                <img class="product-photo" src="http://placehold.it/80x80" />
                <div class="item-content">
                  <label class="item-title">Crackle Plates</label>
                  <p class="item-price">22.50$</p>
                  <p class="item-quantity">x2</p>
                </div>
                <button aria-label="Remove Item from Cart" class="button-close" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                </button>
              </li>
            </ul>
            <div class="shopping-summary">
              <div class="summary-line">
                <b class="price-caption">Subtotal</b>
                <b class="price-subtotal">$481.00</b>
              </div>
              <div class="summary-line">
                <b class="price-caption">Total</b>
                <b class="price-total">$481.00</b>
              </div>
            </div>
            <button class="cart-submit" type="button">Checkout</button>
          </div>
        </transition>
      </li>
      <li class="navigation-icons-item">
        <button v-bind:class="{'active' : areSettingsToggled}" v-on:click="toggleSettings" class="navigation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" /></svg>
        </button>
        <transition name="fade">
          <div v-if="areSettingsToggled" class="settings-dropdown">
            <ul class="settings-list">
              <li class="settings-item">
                <a aria-label="Settings Section 1" href="#">Setting 1</a>
              </li>
              <li class="settings-item">
                <a aria-label="Settings Section 2" href="#">Setting 2</a>
              </li>
              <li class="settings-item">
                <a aria-label="Settings Section 3" href="#">Setting 3</a>
              </li>
              <li class="settings-item">
                <a aria-label="Settings Section 4" href="#">Setting 4</a>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @import "@/Styles/Components/Navigation.scss";
</style>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        isMenuToggled: false,
        isCartToggled: false,
        areSettingsToggled: false,
        body: document.querySelector('body'),
      };
    },
    methods: {
      toggleMenu: function () {
        this.isMenuToggled = !this.isMenuToggled;

        if (this.isMenuToggled) {
          this.body.className = 'body-navbar-hidden';
        } else {
          this.body.className = '';
        }
      },

      toggleCart: function () {
        this.isCartToggled = !this.isCartToggled;
        this.areSettingsToggled = false;
      },

      toggleSettings: function () {
        this.areSettingsToggled = !this.areSettingsToggled;
        this.isCartToggled = false;
      }
    }
  }
</script>