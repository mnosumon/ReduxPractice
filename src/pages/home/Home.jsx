import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../slice/counterSlice'

const Home = () => {
  // const countApp = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


    let [count, setCount] = useState(0)
    let handleIncrement = ()=>{
        count++
        setCount(count)
        dispatch(increment(count))
    }
    let handleDecrement = ()=>{
        count--
        setCount(count)
        dispatch(decrement(count))
    }
  return (
    <div className='h-[345px] w-[500px] bg-slate-400'>
        <button onClick={handleIncrement} className='text-xl py-4 px-6 bg-orange-500'>Increment</button>
        <h1 className='text-5xl'>{count}</h1>
        <button onClick={handleDecrement} className='text-xl py-4 px-6 bg-orange-500'>Increment</button>
    </div>
  )
}

export default Home