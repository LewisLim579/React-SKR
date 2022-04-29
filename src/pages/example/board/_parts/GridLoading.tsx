import { Backdrop, CircularProgress } from '@mui/material'

export const GridLoading: React.FC<{ loading: boolean }> = ({ loading = false }) => {
	return (
		<Backdrop open={loading} sx={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
