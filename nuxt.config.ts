import {fileURLToPath} from 'node:url'
import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: {enabled: true},
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/scss/_mixins.scss" as *;'
				}
			}
		}
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		}
	},
	primevue: {
		options: {
			theme: {
				preset: Aura
			}
		}
	},
	modules: [
		'@nuxt/image',
		'@primevue/nuxt-module',
	]
})
