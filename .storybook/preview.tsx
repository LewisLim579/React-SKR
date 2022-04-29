import React from 'react'
import GlobalStyle from '@styles/global'

export default {
	parameters: {
		layout: 'centered',
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: '#fff',
	},
	decorators: [
		(Story: React.FC) => (
			<>
				<GlobalStyle />
				<Story />
			</>
		),
	],
}
