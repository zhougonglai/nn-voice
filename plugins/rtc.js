import RTC from '~/services/rtc';
import RTM from '~/services/rtm';
import Vue from 'vue';

const $RTC = new RTC();
const $RTM = new RTM();
Vue.prototype.$RTC = $RTC;
Vue.prototype.$RTM = $RTM;

export default function(args, inject) {
	inject('RTC', $RTC);
	inject('RTM', $RTM);
}
