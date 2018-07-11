<template>
  <li class="navigation-icons-item">
    <button v-bind:aria-expanded="toggleSettingsStatus" v-bind:class="{'active' : toggleSettingsStatus}" @keyup.esc="toggleSettings" @click="toggleSettings" class="navigation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" /></svg>
    </button>
    <transition name="fade">
      <div v-if="toggleSettingsStatus" class="settings-dropdown">
        <ul class="settings-list">
          <li class="settings-item">
            <a aria-label="Settings Section 1" href="#">Setting 1</a>
          </li>
          <li class="settings-item">
            <a aria-label="Settings Section 2" href="#">Setting 2</a>
          </li>
          <li class="settings-item">
            <a aria-label="Settings Section 3" href="#">Setting 3</a>
          </li>
          <li class="settings-item">
            <a aria-label="Settings Section 4" href="#">Setting 4</a>
          </li>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
  export default {
    name: "Settings",
    methods: {
      toggleSettings() {
        this.$store.dispatch("toggleSettings");
      }
    },
    computed: {
      toggleSettingsStatus() {
        return this.$store.getters.toggleSettingsStatus;
      }
    }
  }
</script>

<style lang="scss" src="./Settings.scss" scoped />