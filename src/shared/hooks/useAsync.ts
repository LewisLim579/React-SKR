import { useAppSelector } from './useAppSelector'
import { DependencyList, useEffect } from 'react'
import useAsyncFn from '@hooks/useAsyncFn'
import { FunctionReturningPromise } from './misc/types'

export type { AsyncState, AsyncFnReturn } from '@hooks/useAsyncFn'

export default function useAsync<T extends FunctionReturningPromise>(
	fn: T,
	deps: DependencyList = [],
) {
	const [state, callback] = useAsyncFn(fn, deps, {
		loading: true,
	})

	useEffect(() => {
		callback()
	}, [callback])

	return state
}
