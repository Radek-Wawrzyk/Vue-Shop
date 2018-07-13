<template>
  <div class="col-md-6 col-lg-4">
    <div class="product">
      <router-link :to="'product/' + product.id" :aria-label="product.title" :title="product.title">
        <figure class="product-img">
          <img v-bind:src="product.images[0]" :alt="product.title">
        </figure>
        <div class="product-content">
          <h5 class="product-title">{{product.title}}</h5>
          <p class="product-price">{{`$${product.price}`}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShopProduct",
  props: {
    "product": Object
  }
}

</script>

<styles lang="scss" src="./ShopProduct.scss" scoped />



