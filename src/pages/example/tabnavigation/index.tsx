import React from 'react'

// MUI
import { Container, Grid } from '@mui/material'

// components
import { Pages } from '@pages/example/tabnavigation/_parts/Pages'
import Menu from '@pages/example/tabnavigation/_parts/Menu'
import { TabNavigationProvider, TabList, TabPanels } from '@lib/tabNavigation'

const TabNavigationExample: React.FC = () => {
	return (
		<Container maxWidth="lg" sx={{ mt: 3 }}>
			<Grid container direction="row">
				<TabNavigationProvider>
					{/* example: Page link list */}
					<Menu />
					{/* Tab UI area */}
					<Grid item md={10} width="100%">
						<TabList />
						<TabPanels pages={Pages} />
					</Grid>
				</TabNavigationProvider>
			</Grid>
		</Container>
	)
}

export default React.memo(TabNavigationExample)
