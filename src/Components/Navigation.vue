<template>
    <nav class="navigation-container">
        <div class="navigation-brand">

        </div>
        <ul v-bind:class="{'toggled': isToggled}" class="navigation-menu">
            <li class="navigation-item"><router-link to="/">Home </router-link></li>
            <li class="navigation-item"><router-link to="/shop">Shop </router-link></li>
            <li class="navigation-item"><router-link to="/about">About </router-link></li>
            <li class="navigation-item"><router-link to="/contact">Contact </router-link></li>
        </ul>
        <button v-on:click="toggle" class="navigation-hamburger">
            <div class="hamburger-segment"></div>
            <div class="hamburger-segment"></div>
            <div class="hamburger-segment"></div>
        </button>
    </nav>
</template>

<style lang="scss">
    @import "@/Styles/Components/Navigation.scss";
</style>

<script>
    export default
        {
            data() {
                return {
                    isToggled: false
                };
            },
            methods:
            {
                toggle: function ()
                {
                    this.isToggled = !this.isToggled;
                }
            }
        }
</script>