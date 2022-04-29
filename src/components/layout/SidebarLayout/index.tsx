import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, styled } from '@mui/material'

import { Sidebar } from '@components/layout/SidebarLayout/Sidebar'
import { Header } from '@components/layout/SidebarLayout/Header'
import { Footer } from '@root/components/common'

// interface SidebarLayoutProps {
// }

const MainWrapper = styled(Box)(
	({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: 1280px) {
            padding-left: 280px;
        }
`,
)

const MainContent = styled(Box)(
	({ theme }) => `
        margin-top: 88px;
        flex: 1 1 auto;
        overflow: auto;
`,
)

export const SidebarLayout: React.FC = () => {
	return (
		<>
			<Sidebar />
			<MainWrapper>
				<Header />
				<MainContent>
					<Outlet />
				</MainContent>
			</MainWrapper>
			<Footer />
		</>
	)
}
