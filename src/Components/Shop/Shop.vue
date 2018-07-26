<template>
  <main id="products">
    <ShopHeader></ShopHeader>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="products">
            <header class="products-header">
              <h3 class="products-header-title">Products</h3>
              <div class="sorting-dropdown">
                Sorting: 
                <div class="dropdown">
                <button @click="displayDropdown = !displayDropdown" class="dropdown-button" type="button">
                  {{activeSortingSchema}}
                  <svg aria-hidden="true" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10 fa-2x"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>   
                </button>
                <transition name="fade">
                  <div v-show="displayDropdown" class="dropdown-items">
                    <ul class="items-container">
                      <li v-for="(item) in sortingSchemas" :key="item.key" @click="applySorting(item.key)" class="dropdown-item">
                        {{ item.displayName }}
                      </li>
                    </ul>
                  </div>
                </transition>
                </div>
              </div>
            </header>
            <transition-group tag="ul" class="row" name="move-fade" :key="products.id">
              <ShopProduct v-for="product in products" :key="product.id" :product="product" ></ShopProduct>
            </transition-group>
            <div class="products-empty" v-if="products.length == 0">
              Sorry we couldn't find anything
            </div>
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

export default {
  name: "Shop",
  components: {
    Footer,
    ShopFilters,
    ShopProduct,
    ShopHeader
  },
  data() {
    return {
      displayDropdown: false,
    };
  },
  methods:
  {
    applySorting(key)
    {
      this.$store.dispatch("changeSortingSchema",key);
      this.displayDropdown = !this.displayDropdown;
    }
  },
  computed: {
    products() {
      return this.$store.getters.searchedProducts;
    },
    sortingSchemas()
    {
      return this.$store.state.products.sortingSchemas;
    },
    activeSortingSchema()
    {
      return this.$store.getters.activeSortingSchemaName;
    }
  }
};
</script>

<style lang="scss" src="./Shop.scss" scoped/>