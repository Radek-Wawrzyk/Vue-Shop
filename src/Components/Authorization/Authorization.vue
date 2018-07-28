<template>
	<main class="authorization-container">
		<div class="authorization-content">
			<div class="authorization-links">
				<router-link class="tab-link"  to="/sign/up">Registrator</router-link>
				<router-link class="tab-link"  to="/sign/in">Login</router-link>
			</div>
			<div class="authorization-view">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</main>
</template>

<style lang="scss" src="./Authorization.scss" scoped></style>