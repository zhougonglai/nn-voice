<template lang="pug">
LazyLoadView.h-screen(:initFN="init")
	template(#loading)
		CircleLoader
	v-app-bar(app fixed elevate-on-scroll)
		v-app-bar-nav-icon(@click="$router.back()")
			v-icon arrow_back
		v-toolbar-title(v-if="userTarget"  @click="switcher")
			v-avatar( height="32" min-width="32" width="32")
				img(:src="userTarget.avatar" :alt="`${userTarget.first_name} ${userTarget.last_name}`")
			span.ml-2 {{userTarget.first_name}} {{userTarget.last_name}}
			template(v-if="peersStatus && isFinite(peersStatus[user.id])")
				WeBage.weui-badge_dot.ml-2(:class="{'bg-success': peersStatus[userTarget.id]}")
		.flex-1
		v-btn(icon)
			v-icon call
		v-btn(icon)
			v-icon videocam
	v-main.h-full
		v-container.h-full.overflow-y-auto(fluid)
			nuxt-child
	v-footer.safe-aria(app fixed)
		v-input(dense :hide-details="true")
			template(#prepend)
				.w-10.h-10.flex.items-center.justify-center
					v-btn(icon)
						v-icon keyboard_voice
				.w-10.h-10.flex.items-center.justify-center
					v-btn(icon)
						v-icon mood
			v-textarea(
				dense
				filled
				auto-grow
				v-model.trim="input"
				rows="1"
				row-height="20")
				template(#append)
					.w-10.h-10.flex.items-center.justify-center(@click="sendMsg")
						v-btn(icon)
							v-icon send
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { throttle } from 'lodash';

export default {
	layout: 'channel',
	data() {
		return {
			input: '',
			loading: {
				send: false,
				emoj: false,
				audio: false,
			},
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
		...mapMutations('rtm', ['MSG_UPDATE']),
		async init() {
			return await true;
		},
		sendMsg: throttle(async function() {
			if (this.input) {
				await this.$RTM.sendMessage(
					await this.$RTM.createTextMessage(this.$route.params.id, {
						text: this.input,
					}),
				);
				this.input = '';
			}
		}, 650),
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
