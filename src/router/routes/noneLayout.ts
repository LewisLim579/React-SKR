import React from 'react'
import { Navigate } from 'react-router-dom'
import { BaseLayout } from '@components/layout'
import { withLoading } from '@root/shared/lib/utils/withLoading'
import type { RouteObject } from 'react-router-dom'

// Status
const Status404 = withLoading(() => import('@pages/status/Status404'))
const Status500 = withLoading(() => import('@pages/status/Status500'))
const StatusMaintenance = withLoading(() => import('@pages/status/Maintenance'))

export const noneLayoutRoutes: RouteObject = {
	path: '/',
	element: React.createElement(BaseLayout),
	children: [
		{
			path: '',
			element: React.createElement(Navigate, { to: '/example/home', replace: true }),
		},
		{
			path: 'status',
			children: [
				{ path: '', element: React.createElement(Navigate, { to: '404', replace: true }) },
				{ path: '404', element: React.createElement(Status404) },
				{ path: '500', element: React.createElement(Status500) },
				{ path: 'maintenance', element: React.createElement(StatusMaintenance) },
			],
		},
		{ path: '*', element: React.createElement(Status404) },
	],
}
