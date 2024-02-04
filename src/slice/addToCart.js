import { createSlice } from '@reduxjs/toolkit'


export const addToCart = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addDtatCart: (state, action) => {
      state.value = [...state.value, action.payload]
    },
  },
})

export const { addDtatCart } = addToCart.actions

export default addToCart.reducer