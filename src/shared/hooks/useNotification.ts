import { useSnackbar } from 'notistack'

export const useNotification = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	return {
		open: enqueueSnackbar,
		close: closeSnackbar,
	}
}
