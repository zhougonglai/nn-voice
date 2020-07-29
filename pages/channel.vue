<template lang="pug">
LazyLoadView(:initFN="init")
	template(#loading)
		CircleLoader
	v-app-bar(app fixed elevate-on-scroll)
		v-app-bar-nav-icon(@click="$router.back()")
			v-icon arrow_back
		v-toolbar-title
			v-avatar(rounded height="32" min-width="32" width="32")
				img(:src="userTarget.smallImgUrl" :alt="userTarget.serverName")
			span.ml-2(v-text="userTarget.serverName")
		v-spacer
		v-menu(left bottom)
			template(#activator="{ on, attrs }")
				v-btn(icon v-bind="attrs" v-on="on")
					v-icon more_vert
			v-list
				v-list-item
					v-list-item-title 频道成员
				v-list-item
					v-list-item-title 麦克风
				v-list-item
					v-list-item-title 音量
	v-main.h-full
		v-container.h-full.overflow-y-auto(fluid)
			nuxt-child
	v-footer.safe-aria(app fixed)
		v-input(dense :hide-details="true")
			template(#prepend)
				.w-10.h-10.flex.items-center.justify-center
					v-btn(icon)
						v-icon keyboard_voice
			v-textarea(
				dense
				filled
				auto-grow
				v-model.trim="input"
				rows="1"
				row-height="20")
			template(#append)
				.w-10.h-10.flex.items-center.justify-center
					v-btn(icon)
						v-icon sentiment_satisfied_alt
				.w-10.h-10.flex.items-center.justify-center(@click="sendMsg")
					v-btn(icon)
						v-icon send
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	layout: 'channel',
	data() {
		return {
			input: '',
		};
	},
	computed: {
		...mapGetters('channel', ['getCard']),
		userTarget() {
			return this.getCard(this.$route.params.id);
		},
	},
	methods: {
		async init() {
			return true;
		},
		sendMsg() {},
	},
};
</script>
