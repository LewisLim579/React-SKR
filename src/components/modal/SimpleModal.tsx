import {
	Avatar,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	colors,
} from '@mui/material'
import { Person as PersonIcon, Add as AddIcon } from '@mui/icons-material'
import { ModalProps } from '@lib/modal'

const emails = ['username@gmail.com', 'user02@gmail.com']

type SimpleDialogProps = ModalProps

const SimpleDialog: React.FC<SimpleDialogProps> = ({
	onClose = () => {
		/** nothing */
	},
}) => {
	const handleListItemClick = (value: string) => {
		typeof onClose === 'function' && onClose(/* value */)
	}

	return (
		<Dialog onClose={onClose} open>
			<DialogTitle>Set backup account</DialogTitle>
			<List sx={{ pt: 0 }}>
				{emails.map((email) => (
					<ListItem button onClick={() => handleListItemClick(email)} key={email}>
						<ListItemAvatar>
							<Avatar sx={{ bgcolor: colors.blue[100], color: colors.blue[600] }}>
								<PersonIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={email} />
					</ListItem>
				))}

				<ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
					<ListItemAvatar>
						<Avatar>
							<AddIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Add account" />
				</ListItem>
			</List>
		</Dialog>
	)
}

export default SimpleDialog
