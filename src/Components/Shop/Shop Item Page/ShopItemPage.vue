<template>
  <main class="item-page container">
    <div class="item-container row">
      <div class="item-gallery col-sm-6 col-xs-12">
        <div class="item-frame">
          <img class="item-image" src="http://placehold.it/300x350"/>
        </div>
        <div class="item-slider">
          <button type="button" v-on:click="moveBack" class="slider-back">
            <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
          </button>
          <div class="slider-container">
            <div v-bind:style="{ left: sliderTranslation + 'px' }" class="slider-frame">
              <img src="https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116400gv-0002.png" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
              <img src="http://placehold.it/80x80" class="photo-indicator"/>
            </div>
          </div>
          <button type="button" v-on:click="moveNext" class="slider-next">
            <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
          </button>
        </div>
      </div>
      <div class="item-brief col-sm-6 col-xs-12">
        <h5 class="item-name">Cloud Wall Clock</h5>
        <p class="item-price">$35.00</p>
        <p class="item-desc">Very good product my friend</p>

        <div class="item-actions">
          <input type="number" class="item-quantity"/>
          <button type="button" class="item-add btn" @click="addToCart">Add to cart</button>
          <button type="button" class="item-favourite">
            <svg aria-hidden="true" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-3x"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
          </button>
        </div>

        <label class="item-availability">Availability: <label class="item-available">In Stock</label></label>
        <div class="item-categories">
          <b>Categories: </b>
          <label class="item-category">Furniture</label>
          <label class="item-category">, Decor</label>
        </div>
        <div class="item-media">
          <b>Share:</b>
          <button type="button" class="media-button btn-light">
            <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" class="svg-inline--fa fa-facebook-f fa-w-9 fa-3x"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
          </button>
          <button type="button" class="media-button btn-light">
            <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16 fa-3x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          </button>
          <button type="button" class="media-button btn-light">
            <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin-in fa-w-14 fa-3x"><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>
          </button>
          <button type="button" class="media-button btn-light">
            <svg aria-hidden="true" data-prefix="fab" data-icon="google-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-google-plus fa-w-16 fa-3x"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="item-data row">
      Very good product my friend
    </div>
  </main>
</template>

<style lang="scss" src="./ShopItemPage.scss"></style>

<script>
  export default {
    name: "ShopItemPage",
    data()
    {
      return {
        sliderTranslation: 0,
        translationStrength: 40,
        item: { //Test of future dynamic object
          id: 4,
          title: "Celinni",
          price: 43100,
          img: "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50509-0016.png",
          amount: 1,
        }
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
      addToCart() {
        this.$store.dispatch("addToCart", this.item);
      }
    }
  }
</script>