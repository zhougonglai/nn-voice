import RTC from '@/services/agora';
import Vue from 'vue';

const $RTC = new RTC();
Vue.prototype.$RTC = $RTC;

export default function(args, inject) {
	inject('RTC', $RTC);
}
