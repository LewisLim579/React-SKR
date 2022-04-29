import React from 'react'
import { useModal } from '@lib/modal'
import modal from '@components/modal'

interface Options {
	onVerify(): void
	title?: string
}

export const useAlert = () => {
	const { openModal } = useModal()

	const alert = React.useCallback(
		(message: string, options?: Omit<Options, 'onVerify'>) => {
			const mergedOptions = {
				message,
				title: options?.title || undefined,
			}

			openModal(modal.AlertModal, mergedOptions)
		},
		[openModal],
	)

	const confirm = React.useCallback(
		(message: string, options?: Options) => {
			const mergedOptions = {
				message,
				title: options?.title || undefined,
				onVerify: options?.onVerify || undefined,
			}

			openModal(modal.AlertModal, mergedOptions)
		},
		[openModal],
	)

	return {
		alert,
		confirm,
	}
}
