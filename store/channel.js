// class ServerInfo{
//   backImgUrl: string;
//   bigImgUrl: string;
//   gameId: string;
//   intor: string;
//   isFirst: number; // 是否首次登录（0:非首次，1:首次）
//   mambers: number;
//   nickName: string; // 昵称
//   nnNumber: number; // nn号
//   onlineNum: number; // 在线人数
//   roldId: number; //角色id（1:社区主, 2:社区管理员）
//   serverId: number;
//   serverName: string;
//   serverTypeId: number;
//   smallImgUrl: string;
//   userId: number;
//   userUrlNn: string; // 用户头像链接
// }

export default {
	state: () => ({
		servers: {},
	}),

	actions: {
		serverAction(_, id) {
			const img = `https://api.adorable.io/avatars/285/${id}.png`;
			const uuid = Math.random()
				.toString(16)
				.substr(-10);
			const serverInfo = {
				backImgUrl: img,
				bigImgUrl: img,
				gameId: uuid,
				intor: '不屈白银-坚韧铂金',
				serverName: '最强王者带你飞',
				serverId: uuid,
				serverTypeId: id % 2 === 0 ? 0 : 1,
				nnNumber: uuid,
			};
			return serverInfo;
		},
	},

	mutations: {
		SET_SERVER(state, server) {
			state.servers[server.serverId] = server;
		},
	},
};
