<template lang="pug">
LazyLoadView(:initFN="init")
	template(#loading)
		CircleLoader
	v-app-bar(app fixed elevate-on-scroll)
		v-app-bar-nav-icon(@click="$router.back()")
			box-icon(name='arrow-back')
		v-toolbar-title(v-if="userTarget"  @click="switcher") {{userTarget.first_name}} {{userTarget.last_name}}
			template(v-if="peersStatus && isFinite(peersStatus[user.id])")
				WeBage.weui-badge_dot.ml-5(:class="{'bg-success': peersStatus[userTarget.id]}")
	v-main
		v-container.h-full.overflow-y-auto(fluid)
			nuxt-child
	v-footer.safe-aria(app fixed)
		v-input(dense :hide-details="true")
			template(#prepend)
				.w-10.h-10.flex.items-center.justify-center
					box-icon(name='equalizer')
			v-textarea(
				dense
				filled
				auto-grow
				v-model="input"
				rows="1"
				row-height="20")
			template(#append)
				.w-10.h-10.flex.items-center.justify-center
					SvgIcon(className="#iconemoji")
				.w-10.h-10.flex.items-center.justify-center(@click="sendMsg")
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
		...mapState('user', ['user', 'users']),
		...mapState('rtm', ['peersStatus']),
		userTarget() {
			return this.$route.params && this.getUser(this.$route.params.id);
		},
	},
	methods: {
		async init() {
			return await true;
		},
		sendMsg() {
			this.$RTM.sendPeerMessage(this.input, this.$route.params.id);
		},
		switcher() {
			console.log('switcher');
			window.weui.picker(
				this.users.map(user => ({
					...user,
					label: `${user.first_name} ${user.last_name}`,
					value: user.id,
				})),
				{
					className: 'custom-classname',
					container: 'body',
					defaultValue: [this.$route.params.id],
					onChange: function(result) {
						console.log(result);
					},
					onConfirm: function(result) {
						console.log(result);
					},
					id: 'singleLinePicker',
				},
			);
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
