import React from 'react'
import { Button, Grid, MenuItem, MenuList } from '@mui/material'
import { useTabControl } from '@lib/tabNavigation'

/**
 * @deprecated
 */
const MenuButton: React.FC<{
	children: React.ReactNode
	name: string
	onClick: (name: string) => void
}> = ({ children, name, onClick }) => {
	const handleClick = React.useCallback(() => {
		onClick(name)
	}, [name, onClick])

	return (
		<MenuItem component={Button} color="secondary" onClick={handleClick}>
			{children}
		</MenuItem>
	)
}
const MenuButtonItem = React.memo(MenuButton)

/**
 * @deprecated
 */
const MenuBase: React.FC = () => {
	// const { getCachingNodes } = useAliveController()
	const { add } = useTabControl()
	const [pageList] = React.useState([
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
	])

	return (
		<Grid item md={2}>
			<MenuList>
				{pageList.map((item, index) => (
					<MenuButtonItem key={`menu-button-${index}`} name={item} onClick={add}>
						{item}
					</MenuButtonItem>
				))}
			</MenuList>
		</Grid>
	)
}
const Menu = React.memo(MenuBase)

export default Menu
