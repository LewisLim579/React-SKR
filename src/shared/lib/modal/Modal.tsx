import React from 'react'
import ReactDOM from 'react-dom'
import { ModalDispatchContext, ModalStateContext } from '@lib/modal/context'
import { disableScroll } from '@lib/utils'
import { merge } from 'lodash-es'

export interface ModalProps {
	onClose?(): void
	onSubmit?(): Promise<void>
}

interface ModalsProps {
	selector?: string
}

export const Modals: React.FC<ModalsProps> = ({ selector = '#modal-container' }) => {
	const openedModals = React.useContext(ModalStateContext)
	const { close } = React.useContext(ModalDispatchContext)
	const element = document.querySelector(selector) as HTMLDivElement

	React.useEffect(() => {
		if (openedModals.length) {
			disableScroll.on()
		} else {
			disableScroll.off()
		}
	})

	return (
		<>
			{openedModals.map(({ Component, props }, index) => {
				const onClose = () => {
					close(Component)
				}
				const handleSubmit = async () => {
					if (props) {
						typeof props.onSubmit === 'function' && (await props.onSubmit())
					}
				}

				const restProps = merge(
					{
						open: true,
						onClose: onClose,
						onSubmit: handleSubmit,
					},
					props ?? props,
				)

				return (
					element &&
					ReactDOM.createPortal(<Component key={index} {...restProps} />, element)
				)
			})}
		</>
	)
}
