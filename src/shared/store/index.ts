import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/slices/index'
import { isDev } from '@lib/index'
import middlewares from '@store/middlewares'
import { createPersistedReducer, actionTypes } from '@store/persist'
import type { Action, ThunkAction } from '@reduxjs/toolkit'

// import 경로에 혼란을 줄이기 위함(`@store/index` path로 필요한 것들을 import)
export * from '@store/persist'

/** RootState 전체 state의 타입 */
export type RootState = ReturnType<typeof store.getState>

/** useDispatch의 타입 */
export type AppDispatch = typeof store.dispatch

/**
 * custom thunk 생성시 사용 가능한 return 타입
 * ReturnType generic이 void 이므로 return 코드가 있다면
 * interface나 type을 만들어 generic을 추가해 사용하는 것을 추천
 */
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export const store = configureStore({
	reducer: createPersistedReducer(rootReducer),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// 직렬화가 가능한지를 확인
			serializableCheck: {
				// 해당 action type에 대해서를 직렬화 가능여부를 확인하지 않음
				ignoredActions: [...actionTypes],
			},
		}).concat(...middlewares),
	devTools: isDev,
})
