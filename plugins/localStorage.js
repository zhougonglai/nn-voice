import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

export default ({ store, isDev }) => {
	if (isDev) {
		createPersistedState({
			key: 'voice',
			paths: ['channel', 'user'],
		})(store);
	} else {
		const ls = new SecureLS({ isCompression: true });
		createPersistedState({
			key: 'voice',
			storage: {
				getItem: key => ls.get(key),
				setItem: (key, value) => ls.set(key, value),
				removeItem: key => ls.remove(key),
			},
			paths: ['channel', 'user'],
		})(store);
	}
};
