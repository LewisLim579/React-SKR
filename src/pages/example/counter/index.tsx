import React from 'react'
import { toNumber } from 'lodash-es'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import {
	selectCount,
	decrement,
	increment,
	incrementAsync,
	incrementIfOdd,
	incrementByAmount,
} from '@store/slices/counter'
import { Button, Input, Paper } from '@mui/material'

const CounterPage: React.FC = () => {
	const count = useAppSelector(selectCount)
	const dispatch = useAppDispatch()
	const [incrementAmount, setIncrementAmount] = React.useState(2)

	const onChangeAmount: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setIncrementAmount(toNumber(event.target.value))
	}

	return (
		<Paper>
			<Button onClick={() => dispatch(decrement())}>-</Button>
			<span>{count}</span>
			<Button onClick={() => dispatch(increment())}>+</Button>
			<Input value={incrementAmount} onChange={onChangeAmount} />
			<Button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add Amount</Button>
			<Button onClick={() => dispatch(incrementAsync(incrementAmount))}>Add Async</Button>
			<Button onClick={() => dispatch(incrementIfOdd(incrementAmount))}>Add If Odd</Button>
		</Paper>
	)
}

export default CounterPage
