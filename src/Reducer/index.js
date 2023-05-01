import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import { articlesReducer } from './Articles-reducer'
import { userReducer } from './User-reducer'
const persistConfig = {
  key: 'root',
  storage,
}
const reducer = combineReducers({
  articlesReducer,
  userReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)
