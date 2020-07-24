<template lang="pug">
LazyLoadView(:initFN="initUsers" v-cloak key="cards")
  template(#loading)
    v-skeleton-loader.mx-auto.rounded-0(
      v-for="ske in 5"
      :key="ske"
      type="list-item-avatar-two-line")
  .flex.flex-col
    .weui-cells__title 切换用户
    .weui-cells
      WeCell.weui-cell_access(v-for="user in users.filter($user => $user.id !== user.id)" :key="user.id" @click="USER(user)")
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
			return await Promise.all([this.usersAction(1), this.usersAction(2)]);
		},
	},
};
</script>
