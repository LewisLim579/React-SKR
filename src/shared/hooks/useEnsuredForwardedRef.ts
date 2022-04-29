import React from 'react'

export default function useEnsuredForwardedRef<T>(
	forwardedRef: React.MutableRefObject<T>,
): React.MutableRefObject<T> {
	const ensuredRef = React.useRef(forwardedRef && forwardedRef.current)

	React.useEffect(() => {
		if (!forwardedRef) {
			return
		}
		forwardedRef.current = ensuredRef.current
	}, [forwardedRef])

	return ensuredRef
}
