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
        <li class="navigation-icons-item">
          <button class="navigation-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
          </button>
        </li>
        <Cart></Cart>
        <li class="navigation-icons-item">
          <button v-bind:aria-expanded="areSettingsToggled" v-bind:class="{'active' : areSettingsToggled}" v-on:click="toggleSettings" class="navigation-icon">
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
    </div>
  </nav>
</template>

<script>

  import Cart from "./Cart/Cart"

  export default {
    name: "Navigation",
    components: { Cart },
    data() {
      return {
        isMenuToggled: false,
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
      toggleSettings: function () {
        this.areSettingsToggled = !this.areSettingsToggled;
      }
    }
  }
</script>

<style lang="scss" src="./Navigation.scss" />