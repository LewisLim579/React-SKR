import React from 'react'
import modal from '@components/modal'

type ComponentType = typeof modal[keyof typeof modal]

export type ModalDispatch = {
	open(Component: ComponentType, props?: ModalState['props']): void
	close(Component: ComponentType): void
}

export interface ModalState {
	Component: ComponentType
	props?: { [key: string]: unknown }
}

export const ModalDispatchContext = React.createContext<ModalDispatch>({
	open: () => {
		/** nothing */
	},
	close: () => {
		/** nothing */
	},
})
export const ModalStateContext = React.createContext<ModalState[]>([])
