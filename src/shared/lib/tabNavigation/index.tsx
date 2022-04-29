import React from 'react'
import { TabList } from '@lib/tabNavigation/components/TabList'
import { TabPanels } from '@lib/tabNavigation/components/TabPanels'
import { TNDispatchContext } from '@lib/tabNavigation/context'
import TabNavigationProvider from '@lib/tabNavigation/context/TabNavigationProvider'
export type { Pages } from '@lib/tabNavigation/components/TabPanels'

export { TabList, TabPanels, TabNavigationProvider }

export const useTabControl = () => {
	const { add, remove, active } = React.useContext(TNDispatchContext)

	return { add, remove, active }
}
