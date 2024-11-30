import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Count, setCount] = useState(0)

  const reset = () => {
    setCount(0)
  }
  

  return (
    <>
     <h1>{Count}</h1>
     <button onClick={() => setCount(Count + 1)}>Increment</button>
     <button onClick={() => setCount(Count - 1)}>Decrement</button>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
