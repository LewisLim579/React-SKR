import React from 'react'
import { Outlet } from 'react-router-dom'

export const BaseLayout: React.FC = ({ children }) => {
	return <>{children || <Outlet />}</>
}
