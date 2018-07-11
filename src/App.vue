<template>
  <div id="app">            
    <Navigation />
    <router-view />
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import "./Styles/ResetCSS/reset.scss";
  @import "./Styles/Grid/grid.scss";
  @import "./Styles/main.scss";
</style>

<script>
    import Navigation from './Components/Navigation/Navigation.vue';
    import Footer from "./Components/Footer/Footer";

    export default
        {
            name: "app",
            components: {Footer, Navigation }
        }
</script>
