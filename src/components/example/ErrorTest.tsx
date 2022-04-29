import React from 'react'
import type { FallbackProps } from 'react-error-boundary'

export const ErrorTest: React.FC = () => {
	throw new Error('에러 발생!!!!')
	return null
}

export const ErrorFallbackComponent: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	const handleResetError = React.useCallback(() => {
		resetErrorBoundary()
	}, [])

	return (
		<div>
			에러가 발생했습니다.
			<br />
			<p>{JSON.stringify(error)}</p>
			<button type="button" onClick={handleResetError}>
				refresh
			</button>
		</div>
	)
}
