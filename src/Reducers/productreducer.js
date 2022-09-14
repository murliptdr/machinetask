import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'detaildata',
  initialState: {
    id:0,
    value:0,
    productdata: [],
    cartdata:[],
    wishlistdata:[]
  },
  reducers: {
    productdata: (state, action) => {
      state.productdata = action.payload
    },
    getcartdata: (state, action) => {
      state.cartdata = action.payload
    },
    wishlistdata: (state, action) => {
      state.wishlistdata = action.payload
    },
    productshow: (state, action) =>{
        state.id = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {productshow, productdata,getcartdata,wishlistdata } = productSlice.actions

export default productSlice.reducer