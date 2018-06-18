<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-5">5</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import "@/Styles/ResetCSS/reset.scss";
  @import "@/Styles/Grid/grid.scss";
  @import "@/Styles/main.scss";
  

</style>
