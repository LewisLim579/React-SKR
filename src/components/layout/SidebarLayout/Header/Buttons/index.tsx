import { Box } from '@mui/material'
import HeaderSearch from '@components/layout/SidebarLayout/Header/Buttons/Search'
import HeaderNotifications from '@components/layout/SidebarLayout/Header/Buttons/Notifications'

const HeaderButtons: React.FC = () => {
	return (
		<Box sx={{ mr: 1 }}>
			<HeaderSearch />
			<Box sx={{ mx: 0.5 }} component="span">
				<HeaderNotifications />
			</Box>
		</Box>
	)
}

export default HeaderButtons
