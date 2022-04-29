import { combineReducers } from '@reduxjs/toolkit'
import CounterReducer from '@store/slices/counter'
import UserSlice from '@store/slices/users'
import AuthSlice from '@store/slices/auth'
import TabsSlice from '@store/slices/tabs'
import type { CounterState } from '@store/slices/counter'
import type { UserState } from '@store/slices/users'
import type { AuthState } from '@store/slices/auth'
import type { TabsState } from '@store/slices/tabs'

export interface IState {
	counter: CounterState
	users: UserState
	auth: AuthState
	tabs: TabsState
}
const rootReducer = combineReducers({
	counter: CounterReducer,
	users: UserSlice,
	auth: AuthSlice,
	tabs: TabsSlice,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
