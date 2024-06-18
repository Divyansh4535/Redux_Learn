import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from './Reducers/counterSlice'


const App = () => {

  const {value}=useSelector((state) =>state.counter)
  const dispatch = useDispatch();


  return (
    <div className='text-center font-bold w-[100vw] h-[50vh] bg-sky-100  '>
     <h1>
       Counter : {value}
      </h1>
      <div className='text-center flex gap-5 justify-center mt-5'>
        <button onClick={()=> dispatch(increment())}  className='bg-blue-500 py-1 px-3 border-2 border-blue-400 rounded-md'> Increment </button>
        <button onClick={()=> dispatch(decrement())} className='bg-green-500 py-1 px-3 border-2 border-green-400 rounded-md'> Decrement </button>
        <button onClick={()=> dispatch(incrementAsync(5))} className='bg-red-500 py-1 px-3 border-2 border-red-400 rounded-md'> Increment by 5 </button>

      </div>

    </div>
  )
}

export default App