import React from 'react'
import { ModalDispatchContext } from '@lib/modal'
import type { ModalDispatch } from '@lib/modal'

export const useModal = () => {
	const { open, close } = React.useContext(ModalDispatchContext)
	const openModal = React.useCallback<ModalDispatch['open']>(
		(Component, props) => {
			open(Component, props)
		},
		[open],
	)
	const closeModal = React.useCallback<ModalDispatch['close']>(
		(Component) => {
			close(Component)
		},
		[close],
	)

	return { openModal, closeModal }
}
