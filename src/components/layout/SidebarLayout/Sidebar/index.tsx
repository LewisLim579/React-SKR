import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Box, Drawer, Hidden, styled } from '@mui/material'
import { SidebarContext } from '@context/Sidebar'
import { Logo } from '@components/common'
import { SidebarMenu } from '@components/layout/SidebarLayout/SidebarMenu'

const StyledBox = styled(Box)(
	({ theme }) => `
        width: 280px;
        color: #6E759F;
        background: #fff;
        box-shadow: 2px 0 3px rgba(159, 162, 191, 0.18), 1px 0 1px rgba(159, 162, 191, 0.32);
        height: 100%;
        
        @media (min-width: 1280px) {
            position: fixed;
            z-index: 10;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
`,
)

const TopSection = styled(Box)(
	({ theme }) => `
        display: flex;
        height: 88px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
        border-bottom: #f2f5f9 solid 1px;
`,
)

const ScrollableSidebarMenu: React.FC = () => {
	return (
		<StyledBox>
			<Scrollbars autoHide>
				<TopSection>
					<Logo />
				</TopSection>
				<SidebarMenu />
			</Scrollbars>
		</StyledBox>
	)
}

export const Sidebar: React.FC = () => {
	const { sidebarToggle, toggleSidebar } = React.useContext(SidebarContext)
	const closeSidebar = React.useCallback(() => toggleSidebar(), [toggleSidebar])

	return (
		<>
			<Hidden lgDown>
				<ScrollableSidebarMenu />
			</Hidden>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					open={sidebarToggle}
					onClose={closeSidebar}
					variant="temporary"
					elevation={9}>
					<ScrollableSidebarMenu />
				</Drawer>
			</Hidden>
		</>
	)
}
