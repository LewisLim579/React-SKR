import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material'
import { ButtonGroup, Button, Switch, FormControlLabel, Box, Stack, Badge } from '@mui/material'
import { Add as AddIcon, Remove as RemoveIcon, Mail as MailIcon } from '@mui/icons-material'
import { PageTitle, PageTitleWrapper } from '@components/common'

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 }
const shapeCircleStyles = { borderRadius: '50%' }
const rectangle = <Box component="span" sx={shapeStyles} />
const circle = <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />

const Badges: React.FC = () => {
	const [count, setCount] = React.useState(1)
	const [invisible, setInvisible] = React.useState(false)

	const handleBadgeVisibility = () => {
		setInvisible(!invisible)
	}

	return (
		<>
			<Helmet>
				<title>Badges - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Badges"
					subHeading="Badge generates a small badge to the top-right of its child(ren)."
					docs="https://material-ui.com/components/badges/"
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
							<CardHeader title="Shapes" />
							<Divider />
							<CardContent>
								<Stack spacing={3} direction="row">
									<Badge color="secondary" badgeContent=" ">
										{rectangle}
									</Badge>
									<Badge color="secondary" badgeContent=" " variant="dot">
										{rectangle}
									</Badge>
									<Badge color="secondary" overlap="circular" badgeContent=" ">
										{circle}
									</Badge>
									<Badge
										color="secondary"
										overlap="circular"
										badgeContent=" "
										variant="dot">
										{circle}
									</Badge>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card>
							<CardHeader title="Badges Visibility" />
							<Divider />
							<CardContent>
								<Box
									sx={{
										color: 'action.active',
										display: 'flex',
										flexDirection: 'column',
										'& > *': {
											marginBottom: 2,
										},
										'& .MuiBadge-root': {
											marginRight: 4,
										},
									}}>
									<div>
										<Badge color="secondary" badgeContent={count}>
											<MailIcon />
										</Badge>
										<ButtonGroup>
											<Button
												aria-label="reduce"
												onClick={() => {
													setCount(Math.max(count - 1, 0))
												}}>
												<RemoveIcon fontSize="small" />
											</Button>
											<Button
												aria-label="increase"
												onClick={() => {
													setCount(count + 1)
												}}>
												<AddIcon fontSize="small" />
											</Button>
										</ButtonGroup>
									</div>
									<div>
										<Badge
											color="secondary"
											variant="dot"
											invisible={invisible}>
											<MailIcon />
										</Badge>
										<FormControlLabel
											sx={{ color: 'text.primary' }}
											control={
												<Switch
													checked={!invisible}
													onChange={handleBadgeVisibility}
												/>
											}
											label="Show Badge"
										/>
									</div>
								</Box>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card>
							<CardHeader title="Colors" />
							<Divider />
							<CardContent>
								<Stack spacing={2} direction="row">
									<Badge badgeContent={4} color="secondary">
										<MailIcon color="action" />
									</Badge>
									<Badge badgeContent={4} color="success">
										<MailIcon color="action" />
									</Badge>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Badges
