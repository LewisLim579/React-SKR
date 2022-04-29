import React from 'react'
import { useAliveController } from 'react-activation'

interface TabState {
	tabs: string[]
	currentName: string
}
type TabAction = { type: 'add' | 'remove' | 'active'; name: string }

const tabReducer: React.Reducer<TabState, TabAction> = (prevState, action) => {
	const state = { ...prevState }
	const tabs = [...state.tabs]

	switch (action.type) {
		case 'add': {
			if (!state.tabs.includes(action.name)) {
				tabs.push(action.name)
			}

			return { tabs, currentName: action.name }
		}
		case 'remove': {
			const tabs = state.tabs.filter((item) => item !== action.name)

			return {
				...state,
				tabs,
			}
		}
		case 'active': {
			return {
				...state,
				currentName: action.name,
			}
		}
		default: {
			return state
		}
	}
}

/**
 * @description
 * hooks
 */
export const useTabNavigation = () => {
	const [state, dispatch] = React.useReducer(tabReducer, {
		tabs: [],
		currentName: '',
	})
	const { drop } = useAliveController()

	const add = React.useCallback((name: string) => {
		dispatch({ type: 'add', name })
	}, [])

	const active = React.useCallback((name: string) => {
		dispatch({ type: 'active', name })
	}, [])

	const remove = React.useCallback(
		(name: string) => {
			const { tabs, currentName } = state

			drop(name)

			if (name === currentName) {
				const currentIndex = tabs.findIndex((item) => item === name)
				const nextTab = tabs[currentIndex + 1]
				const prevTab = tabs[currentIndex - 1]
				active(nextTab || prevTab)
			}
			dispatch({ type: 'remove', name })
		},
		[active, drop, state],
	)

	return {
		state,
		dispatch: {
			add,
			remove,
			active,
		},
	}
}
