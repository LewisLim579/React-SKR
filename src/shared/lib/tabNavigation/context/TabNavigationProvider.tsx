import React from 'react'
import { TNStateContext, TNDispatchContext } from '@lib/tabNavigation/context'
import { useAliveController } from 'react-activation'
import { cloneDeep } from 'lodash-es'
import type { TNState } from '@lib/tabNavigation/context'

export const useTabControl = () => {
	const { add, remove, active } = React.useContext(TNDispatchContext)

	return { add, remove, active }
}

const TabNavigationProvider: React.FC = ({ children }) => {
	const [value, setValue] = React.useState<TNState>({
		tabs: [],
		currentName: '',
	})
	const { drop } = useAliveController()

	const add = React.useCallback((name: string) => {
		setValue((state) => {
			const prevState = cloneDeep(state)
			if (!prevState.tabs.includes(name)) {
				prevState.tabs.push(name)
			}
			return {
				...prevState,
				currentName: name,
			}
		})
	}, [])

	const active = React.useCallback((name: string) => {
		setValue((state) => {
			const prevState = cloneDeep(state)
			return {
				...prevState,
				currentName: name,
			}
		})
	}, [])

	const remove = React.useCallback(
		(name: string) => {
			setValue((state) => {
				const tabs = state.tabs.filter((item) => item !== name)
				let currentName = state.currentName

				drop(name)

				if (name === currentName) {
					const currentIndex = tabs.findIndex((item) => item === name)
					const nextTab = tabs[currentIndex + 1]
					const prevTab = tabs[currentIndex - 1]
					currentName = nextTab || prevTab
				}

				return {
					tabs,
					currentName,
				}
			})
		},
		[drop],
	)

	return (
		<TNStateContext.Provider value={value}>
			<TNDispatchContext.Provider value={{ add, active, remove }}>
				{children}
			</TNDispatchContext.Provider>
		</TNStateContext.Provider>
	)
}

export default TabNavigationProvider
