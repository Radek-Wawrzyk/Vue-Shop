<template>
	<main class="authorization-container">
		<div class="authorization-content">
			<div class="authorization-tabs">
				<router-link class="tab-button" tag="button" to="/sign/up">Registrator</router-link>
				<router-link class="tab-button" tag="button" to="/sign/in">Login</router-link>
			</div>
			<div class="authorization-view">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</main>
</template>
<style lang="scss" src="./Authorization.scss" scoped>
</style>