import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useActivate, useAliveController, useUnactivate } from 'react-activation'
import { useAppSelector } from '@hooks/useAppSelector'
import { shallowEqual, useDispatch } from 'react-redux'
import { calculate } from '@store/slices/tabs'

const Counter: React.FC = () => {
	const { value } = useAppSelector(
		(state) => ({
			value: state.tabs.value,
		}),
		shallowEqual,
	)
	const dispatch = useDispatch()

	const initialize = React.useCallback(() => {
		dispatch(calculate(-value))
	}, [dispatch, value])

	const sum = React.useCallback(() => {
		dispatch(calculate(1))
	}, [dispatch])

	const subtract = React.useCallback(() => {
		dispatch(calculate(-1))
	}, [dispatch])

	return (
		<Box>
			<Grid container direction="row">
				<Grid item>
					<Button onClick={sum}>+</Button>
				</Grid>
				<Grid item alignSelf="center">
					<Typography>{value}</Typography>
				</Grid>
				<Grid item>
					<Button onClick={subtract}>-</Button>
				</Grid>
				<Grid item>
					<Button onClick={initialize}>initialize</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

const Paragraph: React.FC<{ title: string }> = ({ title, children }) => {
	const { getCachingNodes } = useAliveController()
	useActivate(() => {
		console.log(`TestFunction: didActivate :::: ${title}`, getCachingNodes())
	})

	useUnactivate(() => {
		console.log(`TestFunction: willUnactivate :::: ${title}`)
	})

	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			<Typography variant="h1">{title}</Typography>
			{children}
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
				elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
				hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
				velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
				Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
				quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
				fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
				lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
				consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
				faucibus et molestie ac.
			</Typography>
			<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
				nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat
				ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
				volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at
				quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus
				viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
				Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et.
				Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
				elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
				Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
			</Typography>
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni alias quo error
				pariatur consequatur, esse facere deserunt et modi. Ad beatae, tenetur possimus
				officia dolores vitae temporibus totam maxime placeat.
			</Typography>
		</Box>
	)
}

const DataShared: React.FC = () => {
	const { value } = useAppSelector(
		(state) => ({
			value: state.tabs.value,
		}),
		shallowEqual,
	)
	return <Paragraph title="Four">{value}</Paragraph>
}

export const Pages: { [key: string]: React.FC } = {
	One: () => {
		useActivate(() => {
			console.log('One activate')
		})
		return <Paragraph title="One" />
	},
	Two: () => {
		return (
			<Paragraph title="Two">
				<Counter />
			</Paragraph>
		)
	},
	Three: () => <Paragraph title="Three" />,
	Four: DataShared,
	Five: () => <Paragraph title="Five" />,
	Six: () => <Paragraph title="Six" />,
	Seven: () => <Paragraph title="Seven" />,
	Eight: () => <Paragraph title="Eight" />,
	Nine: () => <Paragraph title="Nine" />,
	Ten: () => <Paragraph title="Ten" />,
}
