import colors from 'vuetify/es5/util/colors';
// require('dotenv').config();

const productionScript = [
	{
		hid: 'vconsole',
		src: 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.3.4/vconsole.min.js',
	},
];

export default {
	mode: 'universal',
	router: {
		base: process.env.NODE_ENV === 'production' ? '/nn-voice/' : '',
	},
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content:
					'width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1, user-scalable=no',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				hid: 'weui',
				rel: 'stylesheet',
				href: 'https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css',
			},
			{
				hid: 'mdi',
				rel: 'stylesheet',
				// href: 'https://fonts.googleapis.com/css?family=Material+Icons',
				href:
					'https://cdn.bootcdn.net/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css',
			},
		],
		script: [
			{
				hid: 'iconfont',
				src: 'https://at.alicdn.com/t/font_1825109_95q9b1tdfat.js',
			},
			{
				hid: 'weuijs',
				src: 'https://res.wx.qq.com/open/libs/weuijs/1.2.1/weui.min.js',
			},
			{
				hid: 'decode',
				src: '/lib-generate-test-usersig.min.js',
			},
			...(process.env.NODE_ENV === 'production'
				? productionScript
				: productionScript),
		],
	},
	loading: { color: '#fff' },
	css: ['~/styles/index.scss'],
	server: {
		port: 8000,
		host: '0.0.0.0',
	},
	plugins: [
		'~/plugins/axios',
		{
			src: '~/plugins/wc',
			mode: 'client',
		},
		{
			src: '~/plugins/localStorage',
			mode: 'client',
		},
		{
			src: '~/plugins/rtc',
			mode: 'client',
		},
	],
	buildModules: ['@nuxtjs/vuetify', '@nuxtjs/tailwindcss'],
	modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/proxy'],
	axios: {
		proxy: true,
	},
	env: {},
	dotenv: {
		filename: `.env.${process.env.NODE_ENV}`,
	},
	proxy: {
		'/api': 'https://reqres.in',
		'/faker': {
			target: 'http://faker.hook.io',
			pathRewrite: {
				'^/faker': '',
			},
		},
	},
	vuetify: {
		customVariables: ['~/styles/variables.scss'],
		// theme: {
		// 	dark: true,
		// 	themes: {
		// 		dark: {
		// 			primary: colors.blue.darken2,
		// 			accent: colors.grey.darken3,
		// 			secondary: colors.amber.darken3,
		// 			info: colors.teal.lighten1,
		// 			warning: colors.amber.base,
		// 			error: colors.deepOrange.accent4,
		// 			success: colors.green.accent3,
		// 		},
		// 	},
		// },
	},
	build: {
		extend(config, ctx) {},
	},
};
