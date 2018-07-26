<template>
	<main class="authorization-container">
		<div class="authorization-content">
			<div class="authorization-tabs">
					<router-link to="/sign/up">Registrator</router-link>
					<router-link to="/sign/in">Login</router-link>
			</div>
			<div class="authorization-view">
				<router-view></router-view>
			</div>
		</div>
	</main>
</template>
<style lang="scss" src="./Authorization.scss" scoped>
</style>