<template lang="pug">
LazyLoadView.h-full(:initFN="initUsers" v-cloak)
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
      v-for="ske in 5"
      :key="ske"
      type="list-item-avatar-two-line")
  v-toolbar(dense)
    v-toolbar-title 用户
    .flex-1
    v-btn(icon @click="USER()" v-if="user")
      SvgIcon(class-name="#icontuichu")
  .overflow-y-auto
    .weui-cells__title 切换用户
    .weui-cells
      WeCell.weui-cell_access(v-for="user in users.filter($user => user ? $user.id !== user.id: true)" :key="user.id" @click="switchUser(user)")
        template(#header)
          img.h-10(:src="user.avatar")
        .ml-4 {{user.first_name}} {{user.last_name}}
        template(#footer)
          span {{user.email}}
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	name: 'me',
	computed: {
		...mapState('user', ['user', 'users']),
	},
	methods: {
		...mapActions('user', ['usersAction']),
		...mapMutations('user', ['USER']),
		async initUsers() {
			return await Promise.all([this.usersAction()]);
		},
		switchUser(user) {
			console.log('switchUser', user);
			window.weui.confirm(
				`切换用户: ${user.first_name} ${user.last_name}`,
				async () => {
					const loading = weui.loading('稍后');
					await this.USER();
					this.$nextTick(() => {
						new Promise(resolve => {
							setTimeout(async () => {
								await this.USER(user);
								loading.hide();
								resolve();
							}, 2000);
						});
					});
				},
			);
		},
	},
};
</script>
