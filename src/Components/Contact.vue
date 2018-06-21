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
            <div class="form-group">
              <input type="text" placeholder="Your Name" v-model="fields.name">
              <transition name="fade-form">
                <p class="form-error" v-if="errors.name">{{errors.name}}</p>
              </transition>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="email" placeholder="Your Email" v-model="fields.email">
              <transition name="fade-form">
                <p class="form-error" v-if="errors.email">{{errors.email}}</p>
              </transition>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" placeholder="Your Address" v-model="fields.address">
              <transition name="fade-form">
                <p class="form-error" v-if="errors.address">{{errors.address}}</p>
              </transition>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" placeholder="Your Phone" v-model="fields.phone">
              <transition name="fade-form">
                <p class="form-error" v-if="errors.phone">{{errors.phone}}</p>
              </transition>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <textarea placeholder="Your Message" rows="9" v-model="fields.message"></textarea>
              <transition name="fade-form">
                <p class="form-error" v-if="errors.message">{{errors.message}}</p>
              </transition>
            </div>
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

      const checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const checkPhone = /^[0-9\+]{8,13}$/;

      //Main condition
      if ( this.fields.name.length >= 1 && this.fields.address.length >= 1 && this.fields.message.length >= 1 && checkEmail.test(this.fields.email) && checkPhone.test(this.fields.phone) ) {
        console.log("form submited!");
      } else console.log("form not submited!");

      //Validation fields
      this.fields.name.length >= 1 ? this.errors.name = "" : this.errors.name = "Please fill Name";
      this.fields.address.length >= 1 ? this.errors.address = "" : this.errors.address = "Please fill Address";
      this.fields.message.length >= 1 ? this.errors.message = "" : this.errors.message = "Please fill Message";
      checkEmail.test(this.fields.email) ? this.errors.email = "" : this.errors.email = "Bad Email address or blank";
      checkPhone.test(this.fields.phone) ? this.errors.phone = "" : this.errors.phone = "Bad Phone number or blank";
    }
  }
}

</script>

<style lang="scss">

@import "../Styles/Components/contact";

</style>
