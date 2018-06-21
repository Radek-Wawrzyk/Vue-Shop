<template>
    <nav class="navigation-container">
        <div class="navigation-brand">

        </div>
        <ul v-bind:class="{'toggled': isToggled}" class="navigation-menu">
            <li class="navigation-item"><a href="#">Home </a></li>
            <li class="navigation-item"><a href="#">Shop </a></li>
            <li class="navigation-item"><a href="#">About </a></li>
            <li class="navigation-item"><a href="#">Contact </a></li>
        </ul>
        <div v-on:click="toggle" class="navigation-hamburger">
            <div class="hamburger-segment"></div>
            <div class="hamburger-segment"></div>
            <div class="hamburger-segment"></div>
        </div>
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