import React from 'react'
import KeepAlive from 'react-activation'
import { TNStateContext } from '@lib/tabNavigation/context'

export type Pages = { [key: string]: React.FC }

export const TabPanelsBase: React.FC<{ pages: Pages }> = ({ pages }) => {
	const { currentName } = React.useContext(TNStateContext)

	return (
		<React.Fragment>
			{Object.entries(pages).map(
				([name, Component]) =>
					currentName === name && (
						<KeepAlive key={`tabnavigation-panels-${name}`} name={name}>
							<Component />
						</KeepAlive>
					),
			)}
		</React.Fragment>
	)
}

export const TabPanels = React.memo(TabPanelsBase)
