<template>
  <section id="contact">
    <div class="contact-map">
      There will be map with location
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <header class="contact-header">
            <h1 class="contact-title">Contact us</h1>
            <p class="contact-description">
              Pathetic text about that we care about clients and their happines and other bulshit. 
              Notice that it's fucking placeholder, so get the fuck out over here.
            </p>
          </header>
        </div>
      </div>
      <form class="contact-form">
        <div class="row">
          <div class="col-md-6">
            <input type="text" placeholder="Your Name" v-model="fields.name">
            <p>{{errors.name}}</p>
          </div>
          <div class="col-md-6">
            <input type="email" placeholder="Your Email" v-model="fields.email">
          </div>
          <div class="col-md-6">
            <input type="text" placeholder="Your Address" v-model="fields.address">
          </div>
          <div class="col-md-6">
            <input type="text" placeholder="Your Phone" v-model="fields.phone">
          </div>
          <div class="col-md-12">
            <textarea placeholder="Your Message" rows="9" v-model="fields.message"></textarea>
          </div>
          <div class="col-md-12">
            <button type="submit" @click="formValidate" >Send Message</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  name: "Contact",
  data() {
    return {
      fields: {
        name: "",
        email: "",
        address: "",
        phone: "",
        message: ""
      },
      errors: {
        name: "",
        email: "",
        address: "",
        phone: "",
        message: ""
      }
    }
  },
  methods: {
    formValidate(event) {
      event.preventDefault();
      console.log(this.fields);

      /*It's gonna be in html code -> */this.fields.name.length >= 1 ? this.errors.name = "" : this.errors.name = "Please fill Name";

    }
  }
}

</script>

<style lang="scss">

@import "../Styles/Components/contact";

</style>
