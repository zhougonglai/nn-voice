import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('user', ['user']),
	},
	mounted() {
		this.initRtcClient();
	},
	methods: {
		async initRtcClient() {},
	},
};
