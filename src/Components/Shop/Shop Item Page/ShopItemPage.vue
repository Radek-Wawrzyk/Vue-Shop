<template>
  <main class="page-product">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <section class="item-gallery">
            <div class="item-frame">
              <img class="item-image" :src="product.img" :alt="product.title"/>
            </div>
            <div class="item-slider">
              <button type="button" v-on:click="moveBack" class="slider-back">
                <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
              </button>
              <div class="slider-container">
                <div v-bind:style="{ left: sliderTranslation + 'px' }" class="slider-frame">
                  <img :src="product.img" :alt="product.title" class="photo-indicator"/>
                  <img :src="product.img" :alt="product.title" class="photo-indicator"/>
                  <img :src="product.img" :alt="product.title" class="photo-indicator"/>
                </div>
              </div>
              <button type="button" v-on:click="moveNext" class="slider-next">
                <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
              </button>
            </div>
          </section>
        </div>
        <div class="col-lg-6 col-md-12">
          <section class="item-brief">
            <div class="item-info">
              <h5 class="item-info-name">{{product.title}}</h5>
              <p class="item-info-price">${{product.price}}</p>
              <p class="item-info-description">
                {{product.briefDescription}}
              </p>
            </div>
            <div class="item-buy">
              <div class="item-amount">
                <button class="item-amount-btn" @click="sub">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                </button>
                <input type="number" v-model="amount"/>
                <button class="item-amount-btn" @click="add">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="angle-up" class="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                </button>
              </div>
              <button type="button" class="item-add btn" @click="addToCart">Add to cart</button>
            </div>
            <div class="item-socials">
              <p class="item-socials-text">Share:</p>
              <ul class="item-socials-list">
                <li class="item-social-item">
                  <a href="https://www.facebook.com/">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" class="svg-inline--fa fa-facebook-f fa-w-9 fa-3x"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                  </a>
                </li>
                <li class="item-social-item">
                  <a href="https://twitter.com/">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-3x"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                  </a>
                </li>
                <li class="item-social-item">
                  <a href="https://plus.google.com/discover">
                    <svg aria-hidden="true" data-prefix="fab" data-icon="google-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-google-plus fa-w-16 fa-3x"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="product-tabs col-lg-12">
          <div class="tabs-header">
            <ul class="tabs-list">
              <li v-for="(tab,index) in tabs" :key="index">
                <button type="button" class="tab-header" 
                v-on:click="activeTabIndex = index"
                v-bind:class="{ 'active' : activeTabIndex == index}">{{ tab }}</button>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tabs">
            <transition name="fade">
              <div v-show="activeTabIndex == 0" class="tab-body">
                <div>{{ product.description }}</div>
              </div>
            </transition>
            <transition name="fade">
              <div v-show="activeTabIndex == 1" class="tab-body">
                <table class="product-properties">
                  <tr v-for="(property,index) in product.properties" :key="index">
                    <td class="property-cell">{{ index }}</td>
                    <td class="property-cell">{{property}}</td>
                  </tr>
                </table>
              </div>
            </transition>
            <transition name="fade">
              <div v-show="activeTabIndex == 2" class="tab-body">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "ShopItemPage",
    data() {
      return {
        tabs: ["Description","Additional Information","Reviews"],
        activeTabIndex: 0,
        sliderTranslation: 0,
        translationStrength: 40,
        amount: 1,
        product: {}
      }
    },
    methods: {
      moveBack: function () 
      {
          this.sliderTranslation += this.translationStrength;
      },
      moveNext: function()
      {
          this.sliderTranslation -= this.translationStrength;
      },
      add() {
        this.amount++;
      },
      sub() {
        this.amount--;
      },
      addToCart() {
        const cartItem = {
          id: this.product.id,
          title: this.product.title,
          price: this.product.price,
          img: this.product.img,
          amount: this.amount
        };

        //Push object to cart
        this.$store.dispatch("addToCart", cartItem);
      },
      switchTab(index)
      {
        this.activeTabIndex = index;
      },
      activeTab(index)
      {
        return this.activeTabIndex == index;  
      }
    },
    created: function() {
      //Make sure that id is int
      const id = parseInt(this.$route.params.id);

      //Match products by id
      const product = this.$store.state.products.find(item => item.id === id);
      this.product = product;
    },
  }
</script>

<style lang="scss" src="./ShopItemPage.scss" scoped></style>