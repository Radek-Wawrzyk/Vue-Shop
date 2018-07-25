const state = {
	activeClasses: {
		settings: false,
		cart: false,
		search: false
	},
	body: document.querySelector("body")
}

const getters = {
	toggleCartStatus(state) {
		return state.activeClasses.cart;
	},
	toggleSettingsStatus(state) {
		return state.activeClasses.settings;
	},
	toggleSearchStatus(state)
	{
		return state.activeClasses.search;
	}
}

const mutations = {
	toggleCart(state) {
		state.activeClasses.cart = !state.activeClasses.cart;
		state.activeClasses.settings = false;
		state.activeClasses.search = false;

		if (state.activeClasses.cart) {
			state.body.className = "overflow-hidden";
		} else {
			state.body.className = "";
		}
	},
	toggleSettings(state) {
		state.activeClasses.settings = !state.activeClasses.settings;
		state.activeClasses.cart = false;
		state.activeClasses.search = false;

		if (state.activeClasses.settings) {
			state.body.className = "overflow-hidden";
		} else {
			state.body.className = "";
		}
	},
	toggleSearch(state)
	{
		state.activeClasses.search = !state.activeClasses.search;
		state.activeClasses.cart = false;
		state.activeClasses.settings = false;

    state.activeClasses.search ? state.body.className = "" : false;
	}
}

const actions = {
	toggleCart(event) {
		event.commit("toggleCart");
	},
	toggleSettings(event) {
		event.commit("toggleSettings");
	},
	toggleSearch(event)
	{
		event.commit("toggleSearch");
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}