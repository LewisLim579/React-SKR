import React from 'react'
import { Box, MenuItem, Pagination, Select } from '@mui/material'
import {
	DataGridProProps,
	gridPageCountSelector,
	gridPageSelector,
	gridPageSizeSelector,
	useGridApiContext,
	useGridSelector,
} from '@mui/x-data-grid-pro'
import { toNumber } from 'lodash-es'

// types
import type { SelectChangeEvent } from '@mui/material'

type CustomPaginationProps = Pick<DataGridProProps, 'rowsPerPageOptions'>

export const CustomPagination: React.FC<CustomPaginationProps> = ({ rowsPerPageOptions }) => {
	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)
	const pageSize = useGridSelector(apiRef, gridPageSizeSelector)

	const handlePaginationChange = React.useCallback(
		(event, value) => {
			apiRef.current.setPage(value)
		},
		[apiRef],
	)

	const handlePageSizeChange = React.useCallback(
		(event: SelectChangeEvent) => {
			const value = toNumber(event.target.value)
			apiRef.current.setPageSize(value)
		},
		[apiRef],
	)

	return (
		<Box>
			{rowsPerPageOptions && !!rowsPerPageOptions.length && (
				<Select value={`${pageSize}`} onChange={handlePageSizeChange}>
					{rowsPerPageOptions.map((item, index) => (
						<MenuItem
							key={`custom-datagridpro-rowsperpagesize-item-${index}`}
							value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			)}
			<Pagination count={pageCount} page={page} onChange={handlePaginationChange} />
		</Box>
	)
}
