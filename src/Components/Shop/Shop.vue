<template>
  <main id="products">
    <ShopHeader></ShopHeader>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="products">
            <header class="products-header">
              <h3 class="products-header-title">Products</h3>
              <ShopSorting></ShopSorting>
            </header>
            <transition-group tag="ul" class="row" name="move-fade" :key="products.id">
              <ShopProduct v-for="product in products" :key="product.id" :product="product" ></ShopProduct>
            </transition-group>
            <transition name="fade">
              <p class="products-empty" v-if="products.length === 0">
                Sorry we couldn't find anything...
              </p>
            </transition>
          </section>
        </div>
        <div class="col-md-3">
          <ShopFilters></ShopFilters>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>

import ShopFilters from "./Shop Filters/ShopFilters";
import ShopProduct from "./Shop Product/ShopProduct";
import ShopHeader from "./Shop Header/ShopHeader";
import Footer from "../Footer/Footer";
import ShopSorting from "./Shop Sorting/ShopSorting";

export default {
  name: "Shop",
  components: {
    ShopSorting,
    Footer,
    ShopFilters,
    ShopProduct,
    ShopHeader
  },
  computed: {
    products() {
      return this.$store.getters.searchedProducts;
    }
  }
};

</script>

<style lang="scss" src="./Shop.scss" scoped />