import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15;
  const addValue = () => {
    counter++;
    console.log(counter);
  };
  return (
    <div>
      <h1>Hello</h1>
      <h2>Counter</h2>
      <p>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <br />
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </p>
    </div>
  )
}

export default App
