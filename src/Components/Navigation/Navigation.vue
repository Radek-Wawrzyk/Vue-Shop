<template>
  <nav class="navigation">
    <div class="navigation-left">
      <button :aria-expanded="isMenuToggled ? 'true' : 'false'" aria-label="Open Mobile Menu" v-bind:class="{'active' : isMenuToggled}" v-on:click="toggleMenu" class="navigation-hamburger">
        <span class="hamburger-segment" />
      </button>
      <figure class="navigation-logo">
        <router-link to="/" title="Homepage" aria-label="Homepage" >
          <img src="../../assets/logotype.png" alt="logo">
        </router-link>
      </figure>
    </div>
    <div class="navigation-center">
      <ul v-bind:class="{'menuToggled': isMenuToggled}" class="navigation-menu">
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
    </div>
    <div class="navigation-right">
      <ul class="navigation-icons">
        <Search></Search>
        <Cart></Cart>
        <Settings></Settings>
      </ul>
    </div>
  </nav>
</template>

<script>

  import Cart from "./Cart/Cart"
  import Search from "./Search/Search";
  import Settings from "./Settings/Settings";

  export default {
    name: "Navigation",
    components: {Settings, Search, Cart },
    data() {
      return {
        isMenuToggled: false,
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
      }
    }
  }
</script>

<style lang="scss" src="./Navigation.scss" />