<template lang="pug">
LazyLoadView(:initFN="init")
	template(#loading)
		CircleLoader
	v-app-bar(app fixed elevate-on-scroll)
		v-app-bar-nav-icon(@click="$router.back()")
			box-icon(name='arrow-back')
		v-toolbar-title(v-if="userTarget" v-text="`${userTarget.first_name} ${userTarget.last_name}`")
	v-main
		v-container.h-full.overflow-y-auto(fluid)
			nuxt-child
	v-footer.safe-aria(app fixed)
		v-input(dense :hide-details="true")
			template(#prepend)
				box-icon(name='equalizer')
			v-textarea(
				dense
				filled
				auto-grow
				v-model="input"
				rows="1"
				row-height="20")
			template(#append)
				.w-6.h-6.flex.items-center.justify-center
					SvgIcon(className="#iconemoji")
				.w-6.h-6.flex.items-center.justify-center(@click="sendMsg")
					box-icon(name='send' type='solid')
</template>
<script>
import LazyLoadView from '@/components/wc/LazyLoadView';
import CircleLoader from '@/components/wc/CircleLoader';
import { mapState, mapGetters } from 'vuex';

export default {
	layout: 'channel',
	components: {
		LazyLoadView,
		CircleLoader,
	},
	data() {
		return {
			input: '',
		};
	},
	computed: {
		...mapGetters('user', ['getUser']),
		...mapState('user', ['user']),
		userTarget() {
			return this.$route.params && this.getUser(this.$route.params.id);
		},
	},
	methods: {
		async init() {
			return await true;
		},
		sendMsg() {
			this.$RTM.sendMessageToPeer({ text: this.input }, this.$route.params.id);
		},
	},
};
</script>
<style lang="scss" scoped>
.safe-aria::v-deep {
	.v-text-field__details {
		display: none;
	}
}
</style>
