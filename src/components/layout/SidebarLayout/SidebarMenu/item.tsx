import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import clsx from 'clsx'
import { SidebarContext } from '@context/Sidebar'
import { Button, Badge, Collapse, ListItem } from '@mui/material'
import {
	ExpandLessTwoTone as ExpandLessTwoToneIcon,
	ExpandMoreTwoTone as ExpandMoreTwoToneIcon,
} from '@mui/icons-material'
import { merge } from 'lodash-es'

const RouterLink = React.forwardRef<
	HTMLAnchorElement,
	NavLinkProps & { activeLinkClassName: string }
>(({ activeLinkClassName, className, ...props }, ref) => {
	return (
		<NavLink
			ref={ref}
			className={({ isActive }) =>
				`${clsx({ [activeLinkClassName]: isActive })} ${className}`
			}
			{...props}
		/>
	)
})
RouterLink.displayName = 'RouterLink'

interface SidebarMenuItemProps {
	link?: string
	icon?: React.ComponentType
	badge?: string
	open?: boolean
	active?: boolean
	name: string
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
	children,
	link = '',
	icon: Icon,
	badge,
	open: openParent = false,
	active,
	name,
}) => {
	const [menuToggle, setMenuToggle] = React.useState<boolean>(openParent)
	const { toggleSidebar } = React.useContext(SidebarContext)
	const toggleMenu = React.useCallback(() => {
		setMenuToggle((open) => !open)
	}, [])

	const buttonProps = React.useMemo(() => {
		const toggleMenuProps = {
			onClick: toggleMenu,
			endIcon: menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />,
			className: clsx({ 'Mui-active': menuToggle }),
		}
		const linkMenuProps = {
			activeLinkClassName: 'Mui-active',
			component: RouterLink,
			onClick: toggleSidebar,
			to: link,
		}
		const defaultProps = {
			children: [name, badge && <Badge badgeContent={badge} />],
			startIcon: Icon && <Icon />,
		}

		return merge(defaultProps, children ? toggleMenuProps : linkMenuProps)
	}, [Icon, badge, children, link, menuToggle, name, toggleMenu, toggleSidebar])

	return (
		<ListItem component="div" className={clsx({ 'Mui-children': !!children })} key={name}>
			<Button {...buttonProps} />
			{children && <Collapse in={menuToggle}>{children}</Collapse>}
		</ListItem>
	)
}

export default SidebarMenuItem
