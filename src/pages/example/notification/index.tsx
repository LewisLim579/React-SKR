import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Grid,
	Typography,
} from '@mui/material'
import { PageHeader, PageTitleWrapper } from '@components/common'
import { useNotification } from '@hooks/index'

const NotificationPage: React.FC = () => {
	const { open } = useNotification()

	const handleClick = React.useCallback(() => {
		open('This is the MESSAGE!!', {
			variant: 'error',
			action: (
				<Button onClick={() => alert('추가 action을 실행할수 있습니다.')}>Do Action</Button>
			),
		})
	}, [open])

	return (
		<>
			<Helmet>
				<title>Example - Notification</title>
			</Helmet>
			<PageTitleWrapper>
				<PageHeader title="Notification" subtitle="How to use Notification" />
			</PageTitleWrapper>
			<Container>
				<Grid container direction="row" justifyContent="left" alignItems="stretch">
					<Grid item xs={12}>
						<Card>
							<CardHeader title="Basic Notification" />
							<Divider />
							<CardContent>
								<Typography variant="subtitle1" component="div">
									{/* Selected: {selectedValue} */}
								</Typography>
								<br />
								<Button variant="outlined" onClick={handleClick}>
									Open simple notification
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default NotificationPage
