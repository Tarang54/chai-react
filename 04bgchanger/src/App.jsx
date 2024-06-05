import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
