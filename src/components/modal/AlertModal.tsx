import React from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import type { ModalProps } from '@lib/modal'

interface AlertModalProps extends ModalProps {
	onClose?(): void
	onVerify?(): void
	message?: string
	title?: string
}

const AlertModal: React.FC<AlertModalProps> = ({
	onClose = () => {
		/** nothing */
	},
	message,
	title,
	onVerify,
}) => {
	const handleVerifyWithClose = React.useCallback(() => {
		typeof onVerify === 'function' && onVerify()
		onClose()
	}, [onClose, onVerify])

	React.useEffect(() => {
		const popStateCallback = () => {
			onClose()
		}
		window.addEventListener('popstate', popStateCallback)

		return () => {
			window.removeEventListener('popstate', popStateCallback)
		}
	}, [onClose])

	return (
		<Dialog
			open
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			{title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				{onVerify && (
					<Button color="primary" onClick={handleVerifyWithClose}>
						확인
					</Button>
				)}
				<Button onClick={onClose} autoFocus>
					{onVerify ? '취소' : '확인'}
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default AlertModal
