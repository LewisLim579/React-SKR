import React from 'react'
import { SidebarLayout } from '@components/layout'
import type { RouteObject } from 'react-router-dom'
import { withLoading } from '@lib/utils'

// antd example
const Home = withLoading(() => import('@pages/Home'))
const Login = withLoading(() => import('@pages/example/login'))
// const NotFound = withLoading(() => import('@pages/NotFound'))
const Counter = withLoading(() => import('@pages/example/counter'))
const FormWithHookform = withLoading(() => import('@pages/example/formwithhookform'))
const SignUp = withLoading(() => import('@pages/example/signup'))
const TabNavigation = withLoading(() => import('@pages/example/tabnavigation'))
const Notification = withLoading(() => import('@pages/example/notification'))
const LewisTestPage = withLoading(() => import('@pages/example/lewistestpage'))

// const Board = withLoading(() => import('@pages/example/board'))
const BoardPagination = withLoading(() => import('@pages/example/board/pagination'))
const BoardInfinite = withLoading(() => import('@pages/example/board/infinite'))

export const exampleRoutes: RouteObject = {
	path: 'example',
	element: React.createElement(SidebarLayout),
	children: [
		{ path: 'home', element: React.createElement(Home) },
		{ path: 'login', element: React.createElement(Login) },
		{ path: 'counter', element: React.createElement(Counter) },
		{ path: 'formwithhookform', element: React.createElement(FormWithHookform) },
		{ path: 'signup', element: React.createElement(SignUp) },
		{ path: 'tabnavigation', element: React.createElement(TabNavigation) },
		{ path: 'notification', element: React.createElement(Notification) },
		{ path: 'lewistestpage', element: React.createElement(LewisTestPage) },
		{
			path: 'board',
			children: [
				{ path: 'pagination', element: React.createElement(BoardPagination) },
				{ path: 'infinite', element: React.createElement(BoardInfinite) },
			],
		},
	],
}
