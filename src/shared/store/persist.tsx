import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import type { Reducer, Store } from '@reduxjs/toolkit'
import type { IState } from '@store/slices'

const persistConfig = {
	key: 'root', // key명은 변경해서 사용하세요
	version: 1,
	storage,
}

export const actionTypes = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
export const createPersistor = (store: Store) => persistStore(store)
export const createPersistedReducer = (slice: Reducer<IState>) =>
	persistReducer(persistConfig, slice)
