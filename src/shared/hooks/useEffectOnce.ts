import React from 'react'

const useEffectOnce = (effect: React.EffectCallback) => {
	// eslint-disable-next-line
	React.useEffect(effect, [])
}

export default useEffectOnce
