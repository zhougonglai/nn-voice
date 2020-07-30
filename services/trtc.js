import TRTC from 'trtc-js-sdk';
import EventEmitter from 'events';

const SDKAPPID = '1400406791';
const SECRETKEY =
	'08f48a95bbad9def0d4795433e697bf43b9623ef3b6175af30ee967f38652af7';

export default class RTC extends EventEmitter {
	constructor() {
		super();
	}

	createClient(userId) {
		return (this.client = TRTC.createClient({
			mode: 'rtc',
			sdkAppId: SDKAPPID,
			userId,
			userSig: SECRETKEY,
		}));
	}
}
