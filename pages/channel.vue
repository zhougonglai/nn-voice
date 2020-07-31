<template lang="pug">
LazyLoadView.h-full(:initFN="init" @rendered="joinRoom")
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
		v-container.h-full.relative.overflow-y-auto(fluid)
			.absolute.inset-0
				#remote(ref="remote")
				#local(
					ref="local"
					:class="[{good: quality.local && quality.local.uplinkNetworkQuality < 3,normal: quality.local && quality.local.uplinkNetworkQuality === 3,bad:  quality.local && quality.local.uplinkNetworkQuality >= 3}]")
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
import { mapGetters } from 'vuex';
import RTCMixin from '@/mixins/rtc';

export default {
	layout: 'channel',
	data() {
		return {
			input: '',
			quality: {
				local: null,
			},
			remotes: [],
		};
	},
	mixins: [RTCMixin],
	computed: {
		...mapGetters('channel', ['getCard']),
		userTarget() {
			return this.getCard(this.$route.params.id);
		},
	},
	beforeDestroy() {
		this.$RTC.leave();
	},
	methods: {
		async init() {
			return this.initRtcClient();
		},
		async joinRoom(...args) {
			await this.joinByRTC();
			this.$RTC.on('network-quality', this.networkQuality);
			this.$RTC.subscribe(this.RTCsubscribe);
			this.$RTC.subscribed(this.RTCsubscribed);
		},
		networkQuality(localQuality) {
			this.quality.local = localQuality;
		},
		RTCsubscribe(event) {
			console.log('RTCsubscribe', event);
			this.$RTC.client.subscribe(event.stream);
		},
		RTCsubscribed(event) {
			console.log('RTCsubscribed', event, this.$refs.remote);
			const remoteId = event.stream.getId();
			const div = document.createElement('div');
			div.id = remoteId;
			this.remotes.push({
				id: remoteId,
				el: div,
			});
			this.$refs.remote.appendChild(div);
			event.stream.play(div);
		},
		sendMsg() {},
	},
};
</script>
<style lang="scss" scoped>
#local {
	position: absolute;
	right: 10px;
	bottom: 10px;
	width: 25vw;
	height: 40vw;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 2px 3px var(--weui-FG-3);
	transform: box-shadow 2s linear;
	&.good {
		border: 1px solid var(--weui-GREEN);
		box-shadow: 0 0px 1px 1px var(--weui-GREEN);
	}
	&.normal {
		border: 1px solid var(--weui-YELLOW);
		box-shadow: 0 0px 1px 1px var(--weui-YELLOW);
	}
	&.bad {
		border: 1px solid var(--weui-RED);
		box-shadow: 0 0px 1px 1px var(--weui-YELLOW);
	}
}

#remote {
	height: 25vh;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 4px;
	grid-row-gap: 4px;
	background-color: var(--weui-FG-3);
}
</style>
