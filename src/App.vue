<template>
  <div id="app">            
    <Navigation />
    <transition name="page-transition" tag="div" class="app-page">
      <router-view />
    </transition>
  </div>
</template>

<script>

  import Navigation from './Components/Navigation/Navigation.vue';

  export default {
    name: "app",
    components: { Navigation }
  }

</script>

<style lang="scss">
  @import "./Styles/ResetCSS/reset.scss";
  @import "./Styles/Grid/grid.scss";
  @import "./Styles/main.scss";
</style>
