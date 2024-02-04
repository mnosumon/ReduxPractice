import { configureStore } from '@reduxjs/toolkit'
import counterApp from './slice/counterSlice'
import addToCart from'./slice/addToCart'

export const store = configureStore({
  reducer: {
    countAll: counterApp,
    addCart: addToCart,
  },
})