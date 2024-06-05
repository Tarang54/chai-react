//A simple app to add counter and remove too with 0 as lower limit

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5
  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    // counter = counter+1
    // setCounter(counter)
    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Hello</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}
    >Add value</button>
    <br />
    <button onClick={(counter>0)?removeValue:""}
    >Remove value </button>
    </>
  )
}

export default App
