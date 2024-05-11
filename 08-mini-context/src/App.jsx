import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {



  return (
    <UserContextProvider>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
