import LibGenerateTestUserSig from './lib-generate-test-usersig.min.js';

export const genUserSig = uid => {
	const SDKAPPID = +process.env.SDKAPPID;
	const EXPIRETIME = 604800;
	const SECRETKEY = process.env.SECRETKEY;
	const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
	const userSig = generator.genTestUserSig(uid.toString());
	return {
		sdkAppId: SDKAPPID,
		userId: uid.toString(),
		userSig,
	};
};
