import React from 'react'

export const useMounte = () => {
	const [isMount, setIsMount] = React.useState<boolean>(false)

	React.useEffect(() => {
		setIsMount(true)
	}, [])

	return isMount
}
