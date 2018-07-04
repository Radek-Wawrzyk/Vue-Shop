<template>
  <main id="products">
    <ShopHeader></ShopHeader>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="products">
            <header class="products-header">
              <h3 class="products-header-title">Products</h3>
            </header>
            <div class="row">
              <ShopProduct v-for="product in products" :key="product.id" v-bind:product="product"></ShopProduct>
            </div>
          </section>
        </div>
        <div class="col-md-3">
          <ShopFilters></ShopFilters>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import ShopFilters from "./ShopFilters";
import ShopProduct from "./ShopProduct";
import ShopHeader from "./ShopHeader";

export default {
  name: "Shop",
  components: {
    ShopFilters,
    ShopProduct,
    ShopHeader
  },
  computed: {
    products () {
      return this.$store.state.products;
    }
  }
}

</script>

<style lang="scss">

@import "Shop.scss";

</style>