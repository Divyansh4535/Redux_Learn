import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Reducers/counterSlice.jsx"
import UserReduser from '../Reducers/UserReduser.jsx'
import ProductReducer from '../Reducers/ProductReducer.jsx'

export default configureStore({
  reducer: {
    counter:counterReducer,
    UserReduser:UserReduser,
    ProductReducer:ProductReducer
  }
})