import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setLogin } from '@fetch/auth'
import type { RootState } from '@store/index'

export interface AuthState {
	token: undefined | string
	isLogin: boolean
	user: SetLogin.Res['user'] | null
	status: 'loading' | 'pending' | 'fulfilled'
}

const initialState: AuthState = {
	token: undefined,
	isLogin: false,
	status: 'loading',
	user: null,
}

/**
 * @description
 * logout 처리시 저장된 storage의 제거를 위해 persistor.purge() 메서 호출이 필요
 */
export const login = createAsyncThunk<SetLogin.Res, SetLogin.Params>(
	'auth/login',
	async (params, thunkAPI) => {
		const response = await setLogin(params)
		// return 값이 제대로 넘어 갔다면 action payload는 'fullfilled'가 됩니다.
		if (response.data) {
			return response.data
		} else {
			return thunkAPI.rejectWithValue(response)
		}
	},
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		/** @deprecated */
		fakeLogin(state, action: PayloadAction<boolean>) {
			state.isLogin = action.payload
		},
	},
	// 'extraReducers'는 비동기 처리 뿐만 아니라 외부에서 사용되는 것들도 가져와 사용할 수 있습니다.
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'fulfilled'
				state.token = action.payload.accessToken
				state.user = action.payload.user
			})
			.addCase(login.rejected, (state, action) => {
				// reject 처리, initializing, etc...
				console.log('falil')
			})
	},
})

// action을 내보내기 합니다.
export const { fakeLogin } = authSlice.actions

// selector의 예시, 주로 useSelector에서 사용
export const selectUser = (state: RootState) => state.auth.user
export const selectIsLogin = (state: RootState) => state.auth.isLogin

export default authSlice.reducer
