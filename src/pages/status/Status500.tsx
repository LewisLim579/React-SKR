import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Box, Typography, Hidden, Container, Button, Grid, styled, alpha } from '@mui/material'
import { RefreshTwoTone as RefreshTwoToneIcon } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'

const GridWrapper = styled(Grid)(
	({ theme }) => `
    background: linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%);
`,
)

const MainContent = styled(Box)(
	() => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
)

const TypographyPrimary = styled(Typography)(
	({ theme }) => `
      color: #fff;
`,
)

const TypographySecondary = styled(Typography)(
	({ theme }) => `
      color: ${alpha('#fff', 0.7)};
`,
)

const Status500: React.FC = () => {
	const [pending, setPending] = React.useState(false)
	function handleClick() {
		setPending(true)
	}

	return (
		<>
			<Helmet>
				<title>Status - 500</title>
			</Helmet>
			<MainContent>
				<Grid
					container
					sx={{ height: '100%' }}
					justifyContent="center"
					alignItems="stretch"
					spacing={0}>
					<Grid
						xs={12}
						md={6}
						alignItems="center"
						display="flex"
						justifyContent="center"
						item>
						<Container maxWidth="sm">
							<Box textAlign="center">
								<img alt="500" height={260} src="/static/images/status/500.svg" />
								<Typography variant="h2" sx={{ my: 2 }}>
									There was an error, please try again later
								</Typography>
								<Typography
									variant="h4"
									color="text.secondary"
									fontWeight="normal"
									sx={{ mb: 4 }}>
									The server encountered an internal error and was not able to
									complete your request
								</Typography>
								<LoadingButton
									onClick={handleClick}
									loading={pending}
									variant="outlined"
									color="primary"
									startIcon={<RefreshTwoToneIcon />}>
									Refresh view
								</LoadingButton>
								<Button href="/overview" variant="contained" sx={{ ml: 1 }}>
									Go back
								</Button>
							</Box>
						</Container>
					</Grid>
				</Grid>
			</MainContent>
		</>
	)
}

export default Status500
