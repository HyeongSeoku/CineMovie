import store from 'store'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'states'

interface ISystem {
  theme: string
}

const INIT_THEME_STATE: ISystem = {
  theme: store.get('movie.theme') || 'light',
}

const systemSlice = createSlice({
  name: 'system',
  initialState: INIT_THEME_STATE,
  reducers: {
    setTheme: (state: ISystem, action: PayloadAction<string>) => {
      const newColorSet = action.payload
      store.set('movie.theme', newColorSet)
      document.documentElement.setAttribute('color-theme', newColorSet)
      state.theme = action.payload
    },
    toggleTheme: (state: ISystem) => {
      const newColorSet = state.theme === 'light' ? 'dark' : 'light'
      store.set('movie.theme', newColorSet)
      document.documentElement.setAttribute('color-theme', newColorSet)
      state.theme = newColorSet
    },
  },
})

export const { setTheme, toggleTheme } = systemSlice.actions

export default systemSlice.reducer

export const getTheme = (state: RootState): ISystem => state.themeState
