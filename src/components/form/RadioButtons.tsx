import React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

interface RadioButtonsProps {
	options: FormItem[]
	value: string
	name?: string
	onChange: (...args: unknown[]) => void
	row?: boolean
}

export const RadioButtons = React.forwardRef<JSX.Element, RadioButtonsProps>(
	({ options, ...field }, ref) => {
		return (
			<RadioGroup {...field} ref={ref}>
				{options.map((item, index) => (
					<FormControlLabel {...item} key={`alphabet-${index}`} control={<Radio />} />
				))}
			</RadioGroup>
		)
	},
)
RadioButtons.displayName = 'RadioButtons'
