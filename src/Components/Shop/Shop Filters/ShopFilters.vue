<template>
  <section class="filters">
    <div class="filter-group">
      <h3 class="filter-title">Search</h3>
      <div class="search-input">
        <input type="text" class="search" placeholder="Product name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
      </div>
    </div>
    <div class="filter-group">
      <div class="filter-price">
        <VueSlider v-bind="sliderData" v-model="priceRange"/>
        <div class="price-ranges">
          <div class="range-display">{{ minimumRange }}</div>
          <div class="range-display">{{ maximumRange }}</div>
        </div>
      </div>
    </div>
    <div class="filter-group">
     <h3 class="filter-title">Strap type</h3>
     <ul class="filter-options">
       <li>
          <input v-model="checkedStraps" @change="filterProducts" value="leather" class="checkbox" id="checkbox-1" type="checkbox">
          <label for="checkbox-1">Leather</label>
       </li>
       <li>
          <input v-model="checkedStraps" @change="filterProducts" value="metal" class="checkbox" id="checkbox-2" type="checkbox">
          <label for="checkbox-2">Metal</label>
       </li>
       <li>
          <input v-model="checkedStraps" @change="filterProducts" value="rubber" class="checkbox" id="checkbox-3" type="checkbox">
          <label for="checkbox-3">Rubber</label>
       </li>
     </ul>
   </div>
   <div class="filter-group">
     <h3 class="filter-title">Watch shape</h3>
     <ul class="filter-options">
       <li>
          <input v-model="checkedShapes" @change="filterProducts" value="circle" class="checkbox" id="checkbox-4" type="checkbox" >
          <label for="checkbox-4">Circle</label>
       </li>
       <li>
          <input v-model="checkedShapes" @change="filterProducts" value="rectangle"  class="checkbox" id="checkbox-5" type="checkbox">
          <label for="checkbox-5">Rectangle</label>
       </li>
       <li>
          <input v-model="checkedShapes" @change="filterProducts" value="other" class="checkbox" id="checkbox-6" type="checkbox">
          <label for="checkbox-6">Other</label>
       </li>
     </ul>
   </div>
   <div class="filter-group">
     <h3 class="filter-title">Style</h3>
     <ul class="filter-options">
       <li>
          <input v-model="checkedStyles" @change="filterProducts" value="elegant" class="checkbox" id="checkbox-7" type="checkbox">
          <label for="checkbox-7">Elegant</label>
       </li>
       <li>
          <input v-model="checkedStyles" @change="filterProducts" value="sport" class="checkbox" id="checkbox-8" type="checkbox">
          <label for="checkbox-8">Sport</label>
       </li>
     </ul>
   </div>
   <div class="filter-group">
     <h3 class="filter-title">Type</h3>
     <ul class="filter-options">
       <li>
          <input v-model="checkedTypes" @change="filterProducts" value="analogue" class="checkbox" id="checkbox-9" type="checkbox">
          <label for="checkbox-9">Analogue</label>
       </li>
       <li>
          <input v-model="checkedTypes" @change="filterProducts" value="digital" class="checkbox" id="checkbox-10" type="checkbox">
          <label for="checkbox-10">Digital</label>
       </li>
        <li>
          <input v-model="checkedTypes" @change="filterProducts" value="combination" class="checkbox" id="checkbox-11" type="checkbox">
          <label for="checkbox-11">Combination</label>
       </li>
     </ul>
   </div>
  </section>
</template>

<script>
import VueSlider from "vue-slider-component";

export default {
  name: "ProductFilters",
  components: {
    VueSlider
  },
  data() {
    return {
      checkedShapes: [],
      checkedStyles: [],
      checkedTypes: [],
      checkedStraps: [],
      sliderData: {
        min: 0,
        max: 220,

        tooltipStyle: {
          display: "none"
        },
        processStyle: {
          backgroundColor: "#e4c7a2"
        }
      },
      priceRange: [0,220]
    };
  },
  methods: {
    filterProducts: function() {
      if (
        this.checkedShapes.length == 0 &&
        this.checkedStyles.length == 0 &&
        this.checkedTypes.length == 0 &&
        this.checkedStraps == 0
      ) {
        this.$store.state.products.filtering = false;
      } else {
        this.$store.state.products.filtering = true;
      }

      this.$store.state.products.checkedStraps = this.checkedStraps;
      this.$store.state.products.checkedStyles = this.checkedStyles;
      this.$store.state.products.checkedTypes = this.checkedTypes;
      this.$store.state.products.checkedShapes = this.checkedShapes;
    }
  },
  computed:
  {
    minimumRange()
    {
      return this.priceRange[0] + '$';
    },
    maximumRange()
    {
      return this.priceRange[1] + '$';
    }
  }
};
</script>

<style lang="scss" src="./ShopFilters.scss" scoped />