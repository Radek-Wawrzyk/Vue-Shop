<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1>Header H1</h1>
          <h2>Header H2</h2>
          <h3>Header H3</h3>
          <h4>Header H4</h4>
          <h5>Header H5</h5>
          <p>Website in progress, god damm it, please fill this website! </p>
          <a href="#">Link</a>
        </div>
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
