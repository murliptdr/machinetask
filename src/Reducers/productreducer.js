import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'detaildata',
  initialState: {
    id:0,
    value:0,
    productdata: [],
    cartdata:[],
    wishlistdata:[]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    productdatalist: (state, action) => {
      state.productdata = action.payload
    },
    cartdata: (state, action) => {
      state.cartdata = action.payload
    },
    wishlistdata: (state, action) => {
      state.wishlistdata = action.payload
    },
    productshow: (state,action) =>{
        state.id = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,productshow, productdatalist,cartdata,wishlistdata } = counterSlice.actions

export default counterSlice.reducer