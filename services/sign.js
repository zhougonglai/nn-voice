export const genUserSig = uid => {
	const SDKAPPID = 1400406791;
	const EXPIRETIME = 604800;
	const SECRETKEY =
		'08f48a95bbad9def0d4795433e697bf43b9623ef3b6175af30ee967f38652af7';
	const generator = new window.LibGenerateTestUserSig(
		SDKAPPID,
		SECRETKEY,
		EXPIRETIME,
	);
	const userSig = generator.genTestUserSig(uid.toString());
	return {
		sdkAppId: SDKAPPID,
		userId: uid.toString(),
		userSig,
	};
};
