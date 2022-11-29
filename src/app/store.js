import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer ,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postReducer from '../features/posts/postsSlice'
import userReducer from '../features/users/usersSlice'

const rootReducer = combineReducers({
  posts:postReducer,
  users:userReducer
})

const persistConfig={
  key: 'persist-store',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer : persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
export default store