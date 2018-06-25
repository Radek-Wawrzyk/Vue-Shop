<template>
    <nav class="navigation-container">
        <div class="navigation-brand">
            
        </div>
        <ul v-bind:class="{'menuToggled': isMenuToggled}" class="navigation-menu">
            <li v-on:click="toggleMenu" class="navigation-item"><router-link to="/">Home </router-link></li>
            <li v-on:click="toggleMenu" class="navigation-item"><router-link to="/shop">Shop </router-link></li>
            <li v-on:click="toggleMenu" class="navigation-item"><router-link to="/about">About </router-link></li>
            <li v-on:click="toggleMenu" class="navigation-item"><router-link to="/contact">Contact </router-link></li>
        </ul>

        <div>
            <button v-on:click="toggleCart" class="navigation-cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="gray" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
                </svg>
                <ul v-bind:class="{'cartToggled': isCartToggled}" class="cart-shopping"></ul>
            </button>
            <button class="navigation-settings">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="gray" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" />
                </svg>
            </button>
            <button class="navigation-search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path  fill="gray" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </div>

        <button v-on:click="toggleMenu" class="navigation-hamburger">
            <span class="hamburger-segment" />
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
                    isMenuToggled: false,
                    isCartToggled: false,
                    body: document.querySelector('body')
                };
            },
            methods:
            {
                toggleMenu: function ()
                {
                    this.isMenuToggled = !this.isMenuToggled;

                    if (this.isMenuToggled) {
                        this.body.className = 'body-navbar-hidden';
                    }
                    else {
                        this.body.className = '';
                    }
                },

                toggleCart: function ()
                {
                    this.isCartToggled = !this.isCartToggled;
                }
            }
        }
</script>