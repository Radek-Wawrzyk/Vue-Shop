<template>
  <li class="navigation-icons-item">
    <transition name="fade">
      <div @keyup.esc="toggleSearchBar" v-show="isSearchBarToggled" class="searchbar-container">
        <input v-model="queryString" @change="performQuery" placeholder="Search your product" class="searchbar-text" type="text" aria-label="Search your product"/>
        <button v-on:click="toggleSearchBar" class="searchbar-close" type="button">
          <svg enable-background="new 0 0 31.112 31.112" version="1.1" viewBox="0 0 31.112 31.112" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <polygon points="31.112 1.414 29.698 0 15.556 14.142 1.414 0 0 1.414 14.142 15.556 0 29.698 1.414 31.112 15.556 16.97 29.698 31.112 31.112 29.698 16.97 15.556"/>
          </svg>
        </button>
      </div>
    </transition>
    <button v-bind:class="{active : isSearchBarToggled}" v-on:click="toggleSearchBar" class="navigation-icon" aria-label="Close search bar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
    </button>
  </li>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      queryString: '',
      isSearchBarToggled: false
    };
  },
  methods: {
    toggleSearchBar: function() {
      this.isSearchBarToggled = !this.isSearchBarToggled;
    },
    performQuery: function()
    {
      this.$store.dispatch("changeQueryString",this.queryString);
      this.$router.push('/shop');    
    }
  }
};
</script>

<style lang="scss" src="./Search.scss" ></style>