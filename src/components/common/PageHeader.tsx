import React from 'react'
import { Typography, Grid, Avatar, useTheme } from '@mui/material'

interface PageHeaderProps {
	title: string
	subtitle: string
	avatar?: string
	buttons?: JSX.Element | JSX.Element[]
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, avatar, buttons }) => {
	const { spacing } = useTheme()

	return (
		<Grid justifyContent={buttons ? 'space-between' : 'unset'} container alignItems="center">
			{avatar && (
				<Grid item>
					<Avatar
						sx={{ mr: 2, width: spacing(8), height: spacing(8) }}
						variant="rounded"
						src={avatar}
					/>
				</Grid>
			)}
			<Grid item>
				<Typography variant="h3" component="h3" gutterBottom>
					{title}
				</Typography>
				<Typography variant="subtitle2">{subtitle}</Typography>
			</Grid>
			{buttons && (
				<Grid item marginLeft="auto">
					{buttons}
				</Grid>
			)}
		</Grid>
	)
}
