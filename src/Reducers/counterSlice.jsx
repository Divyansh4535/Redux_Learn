import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(state, action);
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// REVIEW  this is a higheroreder function

export const incrementAsync = (amount) => (dispatch) => {  
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 2000);
}
export default counterSlice.reducer