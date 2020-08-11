import RTC from '~/services/trtc';
import RTM from '~/services/trtm';
import Vue from 'vue';

const $RTC = new RTC();
const $RTM = new RTM();
Vue.prototype.$RTC = $RTC;
Vue.prototype.$RTM = $RTM;

export default function(args, inject) {
	inject('RTC', $RTC);
	inject('RTM', $RTM);
}
