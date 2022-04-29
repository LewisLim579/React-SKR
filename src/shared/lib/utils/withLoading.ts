import React from 'react'
import loadable from '@loadable/component'
import { SuspenseLoader } from '@components/common'
import type { DefaultComponent } from '@loadable/component'

/**
 * @description
 * 로딩 HOC
 * loadable component 사용으로 suspense의 기능 대체
 */
export function withLoading<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>) {
	return loadable(loadFn, {
		fallback: React.createElement(SuspenseLoader),
	})
}
