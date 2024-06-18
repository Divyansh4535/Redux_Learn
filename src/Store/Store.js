import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Reducers/counterSlice.jsx"

export default configureStore({
  reducer: {
    counter:counterReducer
  }
})