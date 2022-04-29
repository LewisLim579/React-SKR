import React from 'react'
import { Box } from '@mui/material'
import {
	DataGridPro,
	GridCallbackDetails,
	GridRowScrollEndParams,
	koKR,
	MuiEvent,
} from '@mui/x-data-grid-pro'
import { omit } from 'lodash-es'
import { GridLoading } from '@pages/example/board/_parts/GridLoading'
import { CustomPagination } from '@root/pages/example/board/_parts/CustomPagination'

// types
import type { DataGridProProps } from '@mui/x-data-grid-pro'

type DataGridDefaultProps = Omit<DataGridProProps, 'rows' | 'columns'>

export type ComputedDataGridProps = Omit<
	DataGridProProps,
	| 'components'
	| 'componentsProps'
	| 'autoHeight'
	| 'localeText'
	// TODO: 공통이면 포함시켜야 함
	// | 'rowsPerPageOptions'
	| 'paginationMode'
> & {
	onRowsScrollEnd?: (
		params: GridRowScrollEndParams,
		event: MuiEvent<Record<string, unknown>>,
		details: GridCallbackDetails,
	) => void
}

export const CustomDataGrid: React.FC<ComputedDataGridProps> = ({
	onRowsScrollEnd = () => {
		/** nothing */
	},
	pagination,
	...restProps
}) => {
	const combinedProps = React.useMemo(() => {
		const computeProps: DataGridDefaultProps = {
			localeText: koKR.components.MuiDataGrid.defaultProps.localeText,
			paginationMode: 'server',
		}

		const paginationProps: Partial<DataGridDefaultProps> = pagination
			? {
					autoHeight: true,
					pagination,
					components: {
						Pagination: CustomPagination,
					},
					componentsProps: {
						pagination: {
							rowsPerPageOptions: restProps.rowsPerPageOptions,
						},
					},
			  }
			: {
					onRowsScrollEnd,
			  }

		return {
			...computeProps,
			...restProps,
			...paginationProps,
		}
	}, [onRowsScrollEnd, pagination, restProps])

	return (
		<Box style={{ width: '100%', height: 550, position: 'relative' }}>
			<GridLoading loading={!!restProps.loading} />
			<DataGridPro {...omit(combinedProps, 'loading')} />
		</Box>
	)
}
