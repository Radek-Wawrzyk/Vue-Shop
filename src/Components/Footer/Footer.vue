<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <figure class="footer-logo">
            <router-link to="/" aria-label="Homepage">
              <img src="../../assets/logotype.png" alt="Watch shop" />
            </router-link>
          </figure>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Quick links</h5>
          <ul class="footer-links">
            <li class="footer-links-item">
              <router-link to="/" aria-label="Home">Home</router-link>
            </li>
            <li class="footer-links-item">
              <router-link to="/shop" aria-label="Shop">Shop</router-link>
            </li>
            <li class="footer-links-item">
              <router-link to="/about" aria-label="About">About</router-link>
            </li>
            <li class="footer-links-item">
              <router-link to="/contact" aria-label="Contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Socials</h5>
          <ul class="footer-socials">
            <li class="footer-socials-item">
              <a href="https://www.facebook.com/" aria-label="Facebook">Facebook</a>
            </li>
            <li class="footer-socials-item">
              <a href="https://twitter.com/" aria-label="Twitter">Twitter</a>
            </li>
            <li class="footer-socials-item">
              <a href="https://plus.google.com/discover" aria-label="GooglePlus">Google+</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Contact</h5>
          <ul class="footer-info">
            <li class="footer-info-item">
              <a href="mailto:info@nasz-team.pl" aria-label="Send email to info@nasz-team.pl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
                <p class="footer-info-text">info@nasz-team.pl</p>
              </a>
            </li>
            <li class="footer-info-item">
              <a href="tel:516 649 611" aria-label="Phone Us - 516 649 611">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                <p class="footer-info-text">+48 516 649 611</p>
              </a>
            </li>
            <li class="footer-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
              <p class="footer-info-text">Poland, Gdynia</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="footer-copyright">Copyright © 2018 Vue Shop. All rights reserved</p>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" src="./Footer.scss"/>