import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(20)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    const numbers = '0123456789'
    const characters = '!@#$%^&*()_+'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let allowed = letters
    if (numberAllowed) allowed += numbers
    if (characterAllowed) allowed += characters
    let password = ''
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * allowed.length)
      password += allowed[random]
    }
    setPassword(password)
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select()
    navigator.clipboard.writeText(password)

  }, [password]);
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, setPassword, passwordGenerator]);
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-8 text-orange-500 bg-gray-700 my-auto mt-4'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' className='w-full px-4 py-2 bg-gray-800 text-orange-500' placeholder='Password' readOnly value={password} ref={passwordRef} />
        <button className='px-4 py-2 bg-orange-500 text-gray-800' onClick={() => { copyToClipboard() }}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="Length: {length}"></label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev) }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={characterAllowed} id='characterInput' onChange={() => { setCharacterAllowed((prev) => !prev) }} />
          <label htmlFor="characterInput">Characters</label>

        </div>
      </div>
    </div>
  )
}

export default App
