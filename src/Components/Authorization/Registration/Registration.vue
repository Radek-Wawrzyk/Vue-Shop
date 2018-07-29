<template>
	<div class="registration-container">
		<h5>Create Account</h5>
		<div class="registration-form">
			<div class="form-section">
				<div class="section-header">
					<label class="header">Name</label>
					<label v-if="nameHint.length > 0" class="header-error">{{ nameHint }}</label>
				</div>
				<input @focus="focusName" @blur="checkName" v-model="name" type="text"/>
			</div>
			<div class="form-section">
				<div class="section-header">
					<label class="header">Surname</label>
					<label v-if="surnameHint.length > 0" class="header-error">{{ surnameHint }}</label>
				</div>
				<input @focus="focusSurname" @blur="checkSurname" v-model="surname" type="text"/>
			</div>
			<div class="form-section">
				<div class="section-header">
					<label class="header">E-mail Address</label>
					<label v-if="emailHint.length > 0" class="header-error">{{ emailHint }}</label>
				</div>
				<input @focus="focusEmail" @blur="checkEmail" v-model="email" type="text"/>
			</div>
			<div class="form-section">
				<div class="section-header">
					<label class="header">Password</label>
					<label v-if="passwordHint.length > 0" class="header-error">{{ passwordHint }}</label>
				</div>
				<input @focus="focusPassword" @blur="checkPasswords" v-model="password" type="password"/>
			</div>
      <div class="form-section">
				<div class="section-header">
					<label class="header">Confirm Password</label>
					<label v-if="passwordHint.length > 0" class="header-error">{{ passwordHint }}</label>
				</div>
				<input @focus="focusPassword" @blur="checkPasswords" v-model="passwordCopy" type="password"/>
			</div>
			<label v-if="regulationsHint.length > 0" class="header-error">
				{{ regulationsHint }}
			</label>
			<div class="form-section checkbox-section">
				<label>Confirm our Regulations</label>
				<input v-model="confirmedRegulations" value="regulations" class="checkbox" id="checkbox-1" type="checkbox">
        <label for="checkbox-1"></label>
			</div>
			<label v-if="dataHint.length > 0" class="header-error">
				{{ dataHint }}
			</label>
			<div class="form-section checkbox-section">
				<label>Allow us to process your data</label>
				<input v-model="allowedDataProcessing" value="rodo" class="checkbox" id="checkbox-2" type="checkbox">
        <label for="checkbox-2"></label>
			</div>
			<button class="button-signup">Sign up</button>
		</div>
	</div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      password: "",
      passwordCopy: "",
      confirmedRegulations: false,
      allowedDataProcessing: false,

      emailHint: "",
      nameHint: "",
      surnameHint: "",
      passwordHint: "",
      regulationsHint: "",
      dataHint: "",
    };
  },
  methods: {
		focusPassword: function()
		{
			this.passwordHint = '';
		},
		focusName: function()
		{
			this.nameHint = '';
		},
		focusSurname: function()
		{
			this.surnameHint = '';
		},
		focusEmail: function()
		{
			this.emailHint = '';
		},
		checkPasswords: function()
		{
			if (this.password != this.passwordCopy) 
			{
				this.passwordHint = 'Passwords are not matching';
			}
			
			if(this.password.length < 8 && this.password.length > 0)
			{
				this.passwordHint = 'Password is too short';				
			}

			if(this.password.length == 0)
			{
				this.passwordHint = 'Password is empty';				
			}
		},
		checkName: function()
		{
			if (this.name.length == 0)
			{
				this.nameHint = "This field is empty";
			}
			//Check if this field is not filled with dumb data
		},
		checkSurname: function()
		{
			if (this.surname.length == 0)
			{
				this.surnameHint = "This field is empty";
			}
			//Check if this field is not filled with dumb data
		},
		checkEmail: function()
		{
			if (this.email.length == 0)
			{
				this.emailHint = "This field is empty";
			}
			//Check if this field is not filled with dumb data
		}
  }
};
</script>


<style lang="scss" src="./Registration.scss" scoped></style>