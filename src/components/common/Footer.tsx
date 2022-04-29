import { Box, Container, Link, Typography, styled } from '@mui/material'

const FooterWrapper = styled(Box)(
	({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`,
)

export const Footer: React.FC = () => {
	return (
		<FooterWrapper>
			<Container maxWidth="lg">
				<Box
					py={3}
					display={{ xs: 'block', md: 'flex' }}
					alignItems="center"
					textAlign={{ xs: 'center', md: 'left' }}
					justifyContent="space-between">
					<Box>
						<Typography variant="subtitle1">
							&copy; 2021 - Tokyo Free White React Admin Dashboard
						</Typography>
					</Box>
					<Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
						Crafted by{' '}
						<Link href="https://bloomui.com" target="_blank" rel="noopener noreferrer">
							BloomUI.com
						</Link>
					</Typography>
				</Box>
			</Container>
		</FooterWrapper>
	)
}