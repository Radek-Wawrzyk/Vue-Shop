<template>
  <div class="sorting">
    <div class="sorting-dropdown">
      <button @click="toggle" class="sorting-dropdown-btn" type="button">
        {{activeSortingSchema}}
        <svg :class="{'is-active': dropDownStatus}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
          <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
          </g>
        </svg>
      </button>
      <transition name="fade">
        <ul v-show="dropDownStatus" class="sorting-dropdown-list">
          <li v-for="item in sortingSchemas" :key="item.key" @click="applySorting(item.key)" class="sorting-dropdown-list-item">
            <a href="#">{{ item.displayName }}</a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ShopSorting",
    data: () => ({
      dropDownStatus: false
    }),
    methods: {
      toggle() {
        this.dropDownStatus = !this.dropDownStatus;
      },
      applySorting(key) {
        this.$store.dispatch("changeSortingSchema", key);
        this.toggle();
      },
    },
    computed: {
      sortingSchemas() {
        return this.$store.state.products.sortingSchemas;
      },
      activeSortingSchema() {
        return this.$store.getters.activeSortingSchemaName;
      }
    }
  }

</script>

<style lang="scss" src="./ShopSorting.scss" scoped />