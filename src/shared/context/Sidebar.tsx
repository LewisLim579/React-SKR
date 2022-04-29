import React from 'react'

type SidebarContextType = { sidebarToggle: boolean; toggleSidebar: () => void }

export const SidebarContext = React.createContext<SidebarContextType>({} as SidebarContextType)

export const SidebarProvider: React.FC = ({ children }) => {
	const [sidebarToggle, setSidebarToggle] = React.useState(false)
	const toggleSidebar = () => {
		setSidebarToggle(!sidebarToggle)
	}

	return (
		<SidebarContext.Provider value={{ sidebarToggle, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}
