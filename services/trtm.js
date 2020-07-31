import TIM from 'tim-js-sdk';
import COS from 'cos-js-sdk-v5';
import EventEmitter from 'events';
import { genUserSig } from './sign';

export default class RTM extends EventEmitter {
	constructor() {
		super();
		this.client = TIM.create({ SDKAppID: process.env.SDKAPPID });
		tim.setLogLevel(0);
		tim.registerPlugin({ 'cos-wx-sdk': COS });
	}
}
