import { configureStore } from '@reduxjs/toolkit'
import productreducer from '../Reducers/productreducer'

export default configureStore({
  reducer: {
    detaildata: productreducer
  },
})