<template>
	<div class="registration-container">
		<h5>Create Account</h5>
		<div class="registration-form">
			<div class="form-section">
				<label>Name</label>
				<input type="text"/>
			</div>
			<div class="form-section">
				<label>Surname</label>
				<input type="text"/>
			</div>
			<div class="form-section">
				<label>E-mail Address</label>
				<input type="text"/>
			</div>
			<div class="form-section">
				<label>Password</label>
				<input type="password"/>
			</div>
      <div class="form-section">
				<label>Confirm password</label>
				<input type="password"/>
			</div>
			<div class="form-section checkbox-section">
				<label>Confirm our Regulations</label>
				<input value="regulations" class="checkbox" id="checkbox-1" type="checkbox">
        <label for="checkbox-1"></label>
			</div>
			<div class="form-section checkbox-section">
				<label>Allow us to process your data</label>
				<input value="rodo" class="checkbox" id="checkbox-2" type="checkbox">
        <label for="checkbox-2"></label>
			</div>
			<button class="button-signup">Sign up</button>
		</div>
	</div>
</template>

<style lang="scss" src="./Registration.scss" scoped></style>