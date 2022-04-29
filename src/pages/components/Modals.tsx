import { Helmet } from 'react-helmet-async'
import React from 'react'
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Divider,
	Button,
	Typography,
} from '@mui/material'
import { PageTitle, PageTitleWrapper } from '@components/common'
import { useModal } from '@lib/modal'
import { useAlert } from '@hooks/useAlert'
import modal from '@components/modal'

const ModalsPage: React.FC = () => {
	const { openModal } = useModal()
	const { alert, confirm } = useAlert()
	const [confirmCheck, setConfirmCheck] = React.useState('')

	const handleClick = () => {
		openModal(modal.Simple, { open: true })
	}

	const handleClickAlert = React.useCallback(() => {
		alert('안녕하세요~~~~')
	}, [alert])

	const handleClickConfirm = React.useCallback(() => {
		confirm('확인을 누르시겠습니까?', {
			onVerify() {
				setConfirmCheck('확인을 눌렀습니다.')
				window.setTimeout(() => {
					setConfirmCheck('')
				}, 3000)
			},
		})
	}, [confirm])

	const handleClickAlertWithTitle = React.useCallback(() => {
		alert('안녕하세요~~~~', {
			title: '인사드립니다.',
		})
	}, [alert])

	return (
		<>
			<Helmet>
				<title>Modals - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Modals"
					subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
					docs="https://material-ui.com/components/dialogs/"
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
							<CardHeader title="Basic Modal" />
							<Divider />
							<CardContent>
								<Typography variant="subtitle1" component="div">
									{/* Selected: {selectedValue} */}
								</Typography>
								<br />
								<Button variant="outlined" onClick={handleClick}>
									Open simple dialog
								</Button>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card>
							<CardHeader title="Alert & Confirm" />
							<Divider />
							<CardContent>
								<Button variant="outlined" onClick={handleClickAlert}>
									Open Alert
								</Button>
								<Button variant="outlined" onClick={handleClickConfirm}>
									Open Confirm {confirmCheck}
								</Button>
								<Button variant="outlined" onClick={handleClickAlertWithTitle}>
									Open Alert with TITLE
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default ModalsPage
