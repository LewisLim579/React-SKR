import { withLoading } from '@lib/utils'
import { SidebarLayout } from '@components/layout'
import React from 'react'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

// Components
const Buttons = withLoading(() => import('@pages/components/Buttons'))
const Modals = withLoading(() => import('@pages/components/Modals'))
const Accordions = withLoading(() => import('@pages/components/Accordions'))
const Tabs = withLoading(() => import('@pages/components/Tabs'))
const Badges = withLoading(() => import('@pages/components/Badges'))
const Tooltips = withLoading(() => import('@pages/components/Tooltips'))
const Avatars = withLoading(() => import('@pages/components/Avatars'))
const Cards = withLoading(() => import('@pages/components/Cards'))
const Forms = withLoading(() => import('@pages/components/Forms'))

export const componentRoutes: RouteObject = {
	path: 'components',
	element: React.createElement(SidebarLayout),
	children: [
		{
			path: '',
			element: React.createElement(Navigate, { to: '/components/buttons', replace: true }),
		},
		{ path: 'buttons', element: React.createElement(Buttons) },
		{ path: 'modal s', element: React.createElement(Modals) },
		{ path: 'accordions', element: React.createElement(Accordions) },
		{ path: 'tabs', element: React.createElement(Tabs) },
		{ path: 'badges', element: React.createElement(Badges) },
		{ path: 'tooltips', element: React.createElement(Tooltips) },
		{ path: 'avatars', element: React.createElement(Avatars) },
		{ path: 'cards', element: React.createElement(Cards) },
		{ path: 'forms', element: React.createElement(Forms) },
	],
}
