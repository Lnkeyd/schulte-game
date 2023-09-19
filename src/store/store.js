import { configureStore } from '@reduxjs/toolkit'
import settings from './settingsSlice'

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
})