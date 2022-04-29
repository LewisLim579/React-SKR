# reduxt-toolkit Slice 사용법

## 일반적인 Slice 만들기

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Fruits = {
	count: number
	taste: 'best' | 'better' | 'delicious'
	price: number
}

type ExampleState = { [key: string]: Fruits }

const initialState: ExampleState = {
	banana: {
		count: 91,
		taste: 'best',
		price: 1_000,
	},
	strawberry: {
		count: 10,
		taste: 'better',
		price: -1,
	},
	coconut: {
		count: 0,
		taste: 'delicious',
		price: 3_000,
	},
}

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		// 가격 입력하기 reducer 함수
		inputPrice(state, action: PayloadAction<{ name: string; price: number }>) {
			if (state[name]) {
				alert('해당 과일이 존재하지 않습니다.')
			} else {
				state[name].price = action.price
			}
		},
	},
})
```
