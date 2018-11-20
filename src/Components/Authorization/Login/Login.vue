<template>
	<div class="login-container">
		<h5>Sign in</h5>
		<form class="login-form">
      <transition name="fade">
        <div class="alert alert-error" v-if="statusError">
          <p>User does not exist</p>
        </div>
      </transition>
			<div class="form-group">
				<label>E-mail Address</label>
				<input type="text" v-model="credential.email" v-validate="'required|email'" name="email" placeholder="Email address" />
        <transition name="fade-form">
          <p class="form-error" v-if="errors.has('email')">{{errors.first('email')}}</p>
        </transition>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" v-model="credential.password" v-validate="'required|min:8'" name="password" placeholder="Password"/>
        <transition name="fade-form">
          <p class="form-error" v-if="errors.has('password')">{{errors.first('password')}}</p>
        </transition>
			</div>
			<div class="form-buttons">
				<button class="button-signin" @click="login">Sign in</button>
				<a class="forgot-password" href="#" aria-label="Forgot my password">I forgot my password</a>
			</div>
		</form>
	</div>
</template>

<script>

import axios from "axios";

export default {
  name: "Login",
  data: () => ({
	 credential: {
		 email: "",
		 password: ""
	 },
	 statusError: false
  }),
  methods: {
    async login(event) {
      event.preventDefault();
      const valid = await this.$validator.validateAll();

      if (valid) {
        console.log(this.credential);
      }
    }
  }
}

</script>

<style lang="scss" src="./Login.scss" scoped></style>