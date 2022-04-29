import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface SelectBoxProps {
	options: FormItem[]
	label: string
	name?: string
	value: string
	onChange: (...args: unknown[]) => void
}

export const SelectBox = React.forwardRef<JSX.Element, SelectBoxProps>(
	({ options, name, label, ...rest }, ref) => {
		return (
			<FormControl>
				<InputLabel>{label}</InputLabel>
				<Select {...rest} label={label} ref={ref}>
					{options.map((item, index) => (
						<MenuItem key={`animals-${index}`} value={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		)
	},
)
SelectBox.displayName = 'SelectBox'
