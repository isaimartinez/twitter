import { configureStore } from '@reduxjs/toolkit'
import viewReducer from './providers/viewSlice'

export const store = configureStore({
  reducer: {
    view: viewReducer
  },
})