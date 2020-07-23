import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
var ls = new SecureLS({ isCompression: true });

export default ({ store }) => {
	createPersistedState({
		key: 'voice',
		storage: {
			getItem: key => ls.get(key),
			setItem: (key, value) => ls.set(key, value),
			removeItem: key => ls.remove(key),
		},
		path: ['channel', 'user'],
	})(store);
};
