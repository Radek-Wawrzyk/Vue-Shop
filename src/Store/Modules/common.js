const state = {
	activeClasses: {
		settings: false,
		cart: false
	},
	body: document.querySelector("body")
}

const getters = {
	toggleCartStatus(state) {
		return state.activeClasses.cart;
	},
	toggleSettingsStatus(state) {
		return state.activeClasses.settings;
	}
}

const mutations = {
	toggleCart(state) {
		state.activeClasses.cart = !state.activeClasses.cart;
		state.activeClasses.settings = false;

		if (state.activeClasses.cart) {
			state.body.className = "overflow-hidden";
		} else {
			state.body.className = "";
		}

	},
	toggleSettings(state) {
		state.activeClasses.settings = !state.activeClasses.settings;
		state.activeClasses.cart = false;

		if (state.activeClasses.settings) {
			state.body.className = "overflow-hidden";
		} else {
			state.body.className = "";
		}
	}
}

const actions = {
	toggleCart(event) {
		event.commit("toggleCart");
	},
	toggleSettings(event) {
		event.commit("toggleSettings");
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}