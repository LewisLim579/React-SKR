import React from 'react'
import { useAppSelector, shallowEqual } from '@hooks/index'
import { selectIsLogin } from '@store/slices/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface Props {
	auth?: boolean
}

export const RouterGuard: React.FC<Props> = ({ children }) => {
	const isLogin = useAppSelector(selectIsLogin, shallowEqual)
	const location = useLocation()

	if (isLogin) {
		return <Outlet />
	} else {
		return <Navigate replace to="/" state={{ from: location }} />
	}
}
