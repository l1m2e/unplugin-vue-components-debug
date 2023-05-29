import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

import { defineConfig } from 'vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	plugins: [
		Vue({
			script: {
				propsDestructure: true
			}
		}),
		AutoImport({
			imports: [
				{
					'@arco-design/web-vue': ['Message']
				}
			],
			dts: './src/types/auto-import.d.ts',
			dirs: ['./src/composables'],
			vueTemplate: true,
			resolvers: [ArcoResolver()]
		}),
		Components({
			dirs: ['./src/components'],
			deep: true,
			extensions: ['vue'],
			include: [/.vue$/, /.vue?vue/],
			exclude: [/[\/]node_modules[\/]/, /[\/].git[\/]/, /[\/].nuxt[\/]/],
			resolvers: [
				ArcoResolver({
					sideEffect: true
				})
			],
			dts: './src/types/components.d.ts'
		}),
		Unocss()
	],
	base: '/webapp',
	server: {
		host: '0.0.0.0'
	}
})
