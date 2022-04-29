import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Grid } from '@mui/material'
import { PageTitle, PageTitleWrapper } from '@components/common'
import useAsync from '@hooks/useAsync'
import { setTest } from '@fetch/test'
import { CustomDataGrid } from '@pages/example/board/_parts/CustomDataGrid'
import type { GridCallbackDetails, GridColumns } from '@mui/x-data-grid-pro'

type PagePrepare = Record<'page' | 'size' | 'rowCount', number>

const columns: GridColumns = [
	{ field: 'country' },
	{ field: 'established', width: 120 },
	{ field: 'head_quaters', flex: 1 },
	{
		field: 'logo',
		flex: 1,
		renderCell(logo) {
			return <img alt={logo.row.name} style={{ width: '100px' }} src={logo.value} />
		},
	},
	{ field: 'slogan', flex: 1 },
	{
		field: 'website',
		flex: 1,
		renderCell(website) {
			return <a href="javascript;">{website.value}</a>
		},
	},
]

const HomePage: React.FC = () => {
	const [pagePrepare, setPagePrepare] = React.useState<PagePrepare>({
		page: 1,
		size: 10,
		rowCount: 0,
	})
	const { loading, value, error } = useAsync(async () => {
		const res = await setTest({ page: pagePrepare.page, size: pagePrepare.size })
		setPagePrepare((state) => ({ ...state, rowCount: res.rowCount }))

		return res
	}, [pagePrepare.page, pagePrepare.size])

	const handlePageChange = React.useCallback((page: number, details: GridCallbackDetails) => {
		setPagePrepare((state) => ({ ...state, page: page }))
	}, [])

	const handlePageSizeChange = React.useCallback((size) => {
		setPagePrepare((state) => ({ ...state, size }))
	}, [])

	return (
		<>
			<Helmet>
				<title>Buttons - Components</title>
			</Helmet>
			<PageTitleWrapper>
				<PageTitle
					heading="Index"
					subHeading="examples for data-table"
					docs="https://material-ui.com/components/buttons/"
				/>
			</PageTitleWrapper>
			<Container maxWidth="lg">
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="stretch"
					spacing={3}>
					<Grid item width="100%">
						<CustomDataGrid
							pagination
							columns={columns}
							loading={loading}
							page={pagePrepare.page}
							pageSize={pagePrepare.size}
							rowCount={pagePrepare.rowCount}
							rows={value?.list || []}
							rowsPerPageOptions={[10, 25, 50]}
							onPageChange={handlePageChange}
							onPageSizeChange={handlePageSizeChange}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default HomePage
