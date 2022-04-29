/* eslint-disable react/jsx-key */

// core
import React from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import routes from '@root/router'
import { ErrorBoundary } from 'react-error-boundary'

// @mui style
import { CssBaseline } from '@mui/material'

// for test
import { ErrorFallbackComponent, ErrorTest as ErrorOccurrence } from '@components/example/ErrorTest'

/** @deprecated */
const ErrorTest: React.FC<{ onRefresh: () => void; error: boolean }> = ({ onRefresh, error }) => {
	return (
		<>
			<button type="button" onClick={onRefresh}>
				effect error
			</button>
			{error ? <ErrorOccurrence /> : null}
		</>
	)
}

const App: React.FC = () => {
	const location = useLocation()
	const content = useRoutes(routes, location)
	const [error, setError] = React.useState(false)

	const handleReset = React.useCallback(() => setError(false), [])

	return (
		<ErrorBoundary FallbackComponent={ErrorFallbackComponent} onReset={handleReset}>
			<ErrorTest error={error} onRefresh={setError as () => void} />
			<CssBaseline />
			<AliveScope>{content}</AliveScope>
		</ErrorBoundary>
	)
}

export default App
