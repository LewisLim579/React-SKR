import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

interface HeaderProps {
	width: number
	onClickMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ width, onClickMenu }) => {
	return (
		<AppBar
			position="absolute"
			sx={{
				width: { sm: `calc(100% - ${width}px)` },
				ml: { sm: `${width}px` },
			}}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={onClickMenu}
					sx={{ mr: 2, display: { sm: 'none' } }}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Responsive drawer
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
