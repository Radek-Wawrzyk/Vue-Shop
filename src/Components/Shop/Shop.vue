<template>
  <main>
    <ShopHeader></ShopHeader>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <ShopProduct></ShopProduct>
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
  }
}

</script>

<style>

</style>