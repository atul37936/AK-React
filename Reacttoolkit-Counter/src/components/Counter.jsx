import React from 'react'
import { combineSlices } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment} from "./store/slices/Counterslice.jsx"

const Counter() => {
    const dispatch = useDispatch();
    const reduxStore = useSelector((store) => store.Counter.value)

  return (
    <div>
      <h1>{reduxStore}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  )
}

export default Counter;
