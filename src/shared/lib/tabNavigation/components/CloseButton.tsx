import React from 'react'
import { IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

interface CloseButtonProps {
	tabName: string
	onClose: (tabName: string) => void
}

const CloseButtonBase: React.FC<CloseButtonProps> = ({ tabName, onClose }) => {
	const handleClose: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
		(event: React.MouseEvent) => {
			event.stopPropagation()
			onClose(tabName)
		},
		[onClose, tabName],
	)

	return (
		<span>
			{tabName}
			<IconButton onClick={handleClose} size="small">
				<CloseIcon />
			</IconButton>
		</span>
	)
}
export const CloseButton = React.memo(CloseButtonBase)
