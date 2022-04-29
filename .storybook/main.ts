import tsconfigPaths from 'vite-tsconfig-paths'
import type { StorybookConfig } from '@storybook/react/types'
import type { UserConfig } from 'vite'

/**
 * @type {import('path').ParsedPath}
 */
const path = require('path')

/**
 * @description
 * webpakck의 plugin 타입과 tsconfig-paths-webpack-plugin의 타입이 불일치 하여
 * 타입을 명시적으로 선언하기 어렵습니다.
 * 대체제가 없기 때문에 사용합니다.
 */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/**
 * @description
 * storybook 7.0이 2022년 3월중 release될 예정이므로 추후 업그레이드 필요
 */
const config: StorybookConfig = {
	stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
		// builder: 'storybook-builder-vite',
	},
	// @ts-ignore
	// async viteFinal(config: UserConfig) {
	// 	;(config.plugins || []).push(tsconfigPaths())
	// 	if (config.optimizeDeps) {
	// 		config.optimizeDeps.include = [
	// 			...(config.optimizeDeps?.include ?? []),
	// 			'styled-components',
	// 			'redux-logger',
	// 			'jest-mock',
	// 		]
	// 	}

	// 	config.define = {
	// 		...config.define,
	// 		global: 'window',
	// 	}

	// 	if (config.resolve) {
	// 		config.resolve.dedupe = [...(config.resolve?.dedupe ?? []), '@storybook/client-api']
	// 	}

	// 	return config
	// },
	webpackFinal: async (config, options) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions,
					configFile: path.resolve(__dirname, './tsconfig.json'),
				}),
			]
		}

		return config
	},
}

export default config
