import React from 'react'
import { ThemeProvider } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import { BaseTheme } from '@styles/theme/BaseTheme'

const CustomThemeProvider: React.FC = ({ children }) => {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={BaseTheme}>{children}</ThemeProvider>
		</StylesProvider>
	)
}

export default CustomThemeProvider
