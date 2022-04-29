import { Helmet } from 'react-helmet-async'
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { PageTitle, PageTitleWrapper } from '@components/common'

const Accordions: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Accordions - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Accordions"
					subHeading="Accordions contain creation flows and allow lightweight editing of an element."
					docs="https://material-ui.com/components/accordion/"
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
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography>Accordion 1</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit amet blandit leo
											lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel2a-content"
										id="panel2a-header">
										<Typography>Accordion 2</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit amet blandit leo
											lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion disabled>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel3a-content"
										id="panel3a-header">
										<Typography>Disabled Accordion</Typography>
									</AccordionSummary>
								</Accordion>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Accordions
