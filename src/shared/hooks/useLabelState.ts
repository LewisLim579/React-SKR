import React from 'react'
import type { Dispatch, SetStateAction } from 'react'

export const useLabelState = <T>(
	initialState: T,
	label?: string,
): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = React.useState<T>(initialState)
	React.useDebugValue(`${label}: ${value}`)
	return [value, setValue]
}
