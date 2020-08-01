<template lang="pug">
LazyLoadView.h-full(:initFN="init")
	template(#loading)
		v-skeleton-loader.mx-auto(
						v-for="ske in 5"
						:key="ske"
						type="list-item-avatar-two-line")
	.message-list.flex.flex-col(v-if="getMessages($route.params.id).length")
		.message-item.flex(
			v-for="msg in getMessages($route.params.id)"
			:key="msg.serverReceivedTs"
			:class="[ msg.pid == user.id ? 'reverse': '' ]")
			.blank.order-1.flex-1.flex-shrink-0
			.message-ctx(:class="[msg.pid == user.id ? 'order-2' : 'order-0']")
				span.wrap
					.break-all.antialiased(v-text="msg.text")
	template(v-else)
		.empty.h-full.flex.align-center.justify-center
			img(src="https://discord.com/assets/a12ff54c4c5c03b41006fd96a4709c29.svg" alt="empty")
</template>
<script>
import LazyLoadView from '@/components/wc/LazyLoadView';
import { mapState, mapGetters } from 'vuex';

export default {
	components: {
		LazyLoadView,
	},
	computed: {
		...mapState('user', ['user']),
		...mapState('rtm', ['messages']),
		...mapGetters('rtm', ['getMessages']),
	},
	methods: {
		async init() {
			return Promise.resolve(true);
		},
	},
};
</script>
<style lang="scss" scoped>
.message-list {
	.message-item {
		.blank {
			min-width: 16.7%;
		}
		.message-ctx {
			position: relative;
			padding: 8px;
			background-color: var(--weui-BG-3);
			color: var(--weui-FG-0);
			line-height: 18px;
			font-size: 18px;
			min-width: 0;
			border-radius: 0.25rem;
		}
		&:not(:last-of-type) {
			margin-bottom: 0.25rem;
		}
		&:not(.reverse) {
			.message-ctx {
				&::before {
					content: '';
					position: absolute;
					left: -0.4rem;
					top: 0.25rem;
					width: 0;
					height: 0;
					border-top: transparent 0.425rem solid;
					border-right: var(--weui-BG-3) 0.425rem solid;
					border-bottom: transparent 0.425rem solid;
				}
			}
		}
		&.reverse {
			.message-ctx {
				background-color: var(--weui-BRAND);
				color: var(--weui-BG);
				&::after {
					content: '';
					position: absolute;
					right: -0.4rem;
					top: 0.25rem;
					width: 0;
					height: 0;
					border-top: transparent 0.425rem solid;
					border-left: var(--weui-BRAND) 0.425rem solid;
					border-bottom: transparent 0.425rem solid;
				}
			}
		}
	}
}
</style>
