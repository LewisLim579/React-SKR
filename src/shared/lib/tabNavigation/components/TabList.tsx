import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { CloseButton } from '@lib/tabNavigation/components/CloseButton'
import { TNDispatchContext, TNStateContext } from '@lib/tabNavigation/context'

/**
 * @title TabList
 * @description 탭 버튼의 리스트롤 출력하는 컴포넌트
 */
const TabListBase: React.FC = () => {
	const { tabs, currentName } = React.useContext(TNStateContext)
	const { active, remove } = React.useContext(TNDispatchContext)

	const handleChange = React.useCallback(
		(event: React.SyntheticEvent, value: string) => {
			active(value)
		},
		[active],
	)

	return currentName === '' ? null : (
		<Box width="100%">
			<Tabs
				value={currentName}
				variant="scrollable"
				scrollButtons="auto"
				onChange={handleChange}>
				{tabs.map((tabName, index) => (
					<Tab
						key={`tab-list-${index}`}
						component="div"
						iconPosition="end"
						value={tabName}
						label={<CloseButton tabName={tabName} onClose={remove} />}
					/>
				))}
			</Tabs>
		</Box>
	)
}
export const TabList = React.memo(TabListBase)
