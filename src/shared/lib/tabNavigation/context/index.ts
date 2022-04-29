import React from 'react'

export type TNDispatch = {
	add(name: string): void
	active(name: string): void
	remove(name: string): void
}

export interface TNState {
	tabs: string[]
	currentName: string
}

export const TNStateContext = React.createContext<TNState>({
	tabs: [],
	currentName: '',
})

export const TNDispatchContext = React.createContext<TNDispatch>({
	add(name) {
		/* nothing */
	},
	active(name) {
		/* nothing */
	},
	remove(name) {
		/* nothing */
	},
})
