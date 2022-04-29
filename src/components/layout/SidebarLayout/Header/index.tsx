import React from 'react'
import { Box, Hidden, IconButton, Tooltip, styled } from '@mui/material'
import {
	MenuTwoTone as MenuTwoToneIcon,
	CloseTwoTone as CloseTwoToneIcon,
} from '@mui/icons-material'
import { SidebarContext } from '@context/Sidebar'
import HeaderMenu from '@components/layout/SidebarLayout/Header/Menu'
import HeaderButtons from '@components/layout/SidebarLayout/Header/Buttons'
import HeaderUserbox from '@components/layout/SidebarLayout/Header/Userbox'
import { Logo } from '@components/common'

const HeaderWrapper = styled(Box)(
	({ theme }) => `
        height: 88px;
        color: #6E759F;
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: #fff;
        box-shadow: 0px 2px 3px rgba(159, 162, 191, 0.18), 0px 1px 1px rgba(159, 162, 191, 0.32);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: 1280px) {
            left: 280px;
            width: auto;
        }
`,
)

export const Header: React.FC = () => {
	const { sidebarToggle, toggleSidebar } = React.useContext(SidebarContext)

	return (
		<HeaderWrapper display="flex" alignItems="center">
			<Box display="flex" alignItems="center">
				<Hidden lgUp>
					<Logo />
				</Hidden>
				<Hidden mdDown>
					<HeaderMenu />
				</Hidden>
			</Box>
			<Box display="flex" alignItems="center">
				<HeaderButtons />
				<HeaderUserbox />
				<Hidden lgUp>
					<Tooltip arrow title="Toggle Menu">
						<IconButton color="primary" onClick={toggleSidebar}>
							{!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
						</IconButton>
					</Tooltip>
				</Hidden>
			</Box>
		</HeaderWrapper>
	)
}
