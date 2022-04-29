import { defineConfig, loadEnv } from 'vite'
import path from 'path'
// plugins
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import visualizer from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import babelImport from 'vite-plugin-babel-import'
import checker from 'vite-plugin-checker'

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ mode, command }) => {
	const envDir = path.resolve(process.cwd(), './config/env/')
	const env = {
		...process.env,
		...loadEnv(mode, envDir),
	}

	return {
		server: {
			cors: true,
			port: parseInt(env.VITE_PORT),
			// force pre-bundling
			force: true,
			// 프록시 인스턴스 사용
			proxy: {
				// 테스트 용
				'/v1': {
					target: env.VITE_PUBLIC_API_URL,
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 변수에는 'http-proxy'의 인스턴스가 전달됩니다
					},
				},

				// 실제 사용시
				[env.VITE_API_REPLACE_KEY]: {
					target: env.VITE_PUBLIC_API_URL,
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 변수에는 'http-proxy'의 인스턴스가 전달됩니다
					},
				},
			},
		},
		plugins: [
			/** React hot reload */
			react(),
			/** typescript paths alias */
			tsconfigPaths({}),
			/** eslint visualizer */
			eslint({ cache: false }),
			checker({
				// typescript visualizer
				typescript: {
					tsconfigPath: './tsconfig.json',
					root: './',
					buildMode: process.env.NODE_ENV === 'production',
				},
			}),
			// like webpack analizer
			visualizer({
				open: env.mode === 'development',
			}),
			legacy({
				ignoreBrowserslistConfig: true,
			}),
			babelImport([
				/** example */
				// {
				// 	libraryName: 'antd',
				// 	libraryDirectory: 'lib',
				// 	style: (name) => {
				// 		if (['col', 'row'].some((item) => item === name)) {
				// 			return 'antd/lib/grid/style/index.css'
				// 		} else {
				// 			return `antd/lib/${name}/style/index.css`
				// 		}
				// 	},
				// 	ignoreStyles: [],
				// },
			]),
		],

		// 모듈 최적화
		optimizeDeps: {
			// 포함될 리스트
			include: [
				// 'antd/lib/layout',
			],
		},
		build: {
			target: 'es2015',
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['lodash-es', 'moment', 'axios', 'notistack'],
						chart: ['chart.js'],
						'react-data-grid': ['react-data-grid'],
					},
				},
			},
		},

		// 환경변수 경로
		envDir,
		// 환경변수 접두사
		envPrefix: 'VITE_',
	}
})
