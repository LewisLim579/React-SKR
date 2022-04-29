import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

interface CheckboxGroupProps {
	options: FormItem[]
	name: string
	value: string[]
	onChange: (...args: unknown[]) => void
}

export const CheckboxGroup = React.forwardRef<JSX.Element, CheckboxGroupProps>(
	({ options, onChange, value, name, ...rest }, ref) => {
		const handleCheck = (checkedValue: string) => {
			const newList = value.some((item) => item === checkedValue)
				? value.filter((item) => item !== checkedValue)
				: [...(value ?? []), checkedValue]
			onChange(newList)
		}

		return (
			<>
				{options.map((item, index) => (
					<FormControlLabel
						ref={ref}
						key={`${name}${index}`}
						name={`${name}[${index}]`}
						label={item.label}
						value={item.value}
						onChange={() => handleCheck(item.value)}
						control={<Checkbox />}
					/>
				))}
			</>
		)
	},
)
CheckboxGroup.displayName = 'CheckboxGroup'
