import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD,SUB } from './Action';


function Counter() {
    const dispatch = useDispatch();
    const reduxStore = useSelector((Store)=>Store.Counter)
  return (
    <div>
      <h1>{reduxStore}</h1>
      <button onClick={()=>dispatch({type:ADD , payload:1})}>+</button>
      <button onClick={()=>dispatch({type:SUB , payload:1})}>-</button>
    </div>
  );
}

export default Counter
