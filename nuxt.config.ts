// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/scss/_mixins.scss" as *;'
				}
			}
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},
	nitro: {
		publicAssets: [
			{
				baseURL: 'images', // URL path: /images/*
				dir: 'public/images', // Local path
				maxAge: 60 * 60 * 24, // 1 day cache
			},
		],
	},
	modules: [
		'@nuxt/image',
		'@primevue/nuxt-module',
		'nuxt-yandex-metrika',
	],
	yandexMetrika: {
		id: '106542835',
		debug: process.env.NODE_ENV !== "production",
		options: {
			webvisor: true,        // включить Вебвизор
			clickmap: true,       // карта кликов
			trackLinks: true,      // отслеживание переходов по ссылкам
			accurateTrackBounce: true // точный отказ
		},
	},
})
