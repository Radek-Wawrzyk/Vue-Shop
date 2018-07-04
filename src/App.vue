<template>
  <div id="app">            
    <Navigation />
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "@/Styles/ResetCSS/reset.scss";
  @import "@/Styles/Grid/grid.scss";
  @import "@/Styles/main.scss";
</style>

<script>
    import Navigation from './Components/Navigation/Navigation.vue';

    export default
        {
            name: "app",
            components: { Navigation }
        }
</script>
