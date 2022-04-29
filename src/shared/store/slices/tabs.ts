import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TabsState {
	value: number
}

const initialState: TabsState = {
	value: 0,
}

export const TabsSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		calculate(state, action: PayloadAction<number>) {
			state.value += action.payload
		},
	},
})

// action을 내보내기 합니다.
export const { calculate } = TabsSlice.actions

export default TabsSlice.reducer
