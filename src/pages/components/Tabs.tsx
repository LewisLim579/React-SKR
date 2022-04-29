import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Tabs,
	Tab,
	Typography,
	Box,
} from '@mui/material'
import { PageTitle, PageTitleWrapper } from '@components/common'

interface TabPanelProps {
	index: number
	value: number
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...restProps }) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...restProps}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const TabsDemo: React.FC = () => {
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<>
			<Helmet>
				<title>Tabs - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Tabs"
					subHeading="Tabs make it easy to explore and switch between different views."
					docs="https://material-ui.com/components/tabs/"
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item xs={12}>
						<Card>
							<CardHeader title="Basic Example" />
							<Divider />
							<CardContent>
								<Box sx={{ width: '100%' }}>
									<Tabs
										variant="scrollable"
										scrollButtons="auto"
										textColor="primary"
										indicatorColor="primary"
										value={value}
										onChange={handleChange}
										aria-label="basic tabs example">
										<Tab label="Item One" {...a11yProps(0)} />
										<Tab label="Item Two" {...a11yProps(1)} />
										<Tab label="Item Three" {...a11yProps(2)} />
									</Tabs>
									<TabPanel value={value} index={0}>
										Item One
									</TabPanel>
									<TabPanel value={value} index={1}>
										Item Two
									</TabPanel>
									<TabPanel value={value} index={2}>
										Item Three
									</TabPanel>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default TabsDemo
