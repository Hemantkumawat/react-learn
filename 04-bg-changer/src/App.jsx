import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-green-500')

  return (
    <div className={`h-screen w-full ${bgColor}`}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Background Changer</h1>
        <button
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
          onClick={() => setBgColor('bg-blue-500')}
        >
          Blue
        </button>
        <button
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
          onClick={() => setBgColor('bg-red-500')}
        >
          Red
        </button>
        <button
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
          onClick={() => setBgColor('bg-green-500')}
        >
          Green
        </button>
      </div>
    </div>
  )
}

export default App
