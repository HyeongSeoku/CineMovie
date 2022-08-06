import { configureStore } from '@reduxjs/toolkit'

import themeState from './themeState'

export const store = configureStore({
  reducer: {
    themeState,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
