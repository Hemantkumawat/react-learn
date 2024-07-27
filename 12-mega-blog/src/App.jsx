import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import './App.css'
import authService from './appWrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header, Container } from './components';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {

    authService.getCurrentUser().then((user) => {
      if (user) {
        dispatch(login({ userData: user }))
      } else {
        dispatch(logout())
      }
      setLoading(false)
    }).catch((error) => {
      console.log('Error:::', error);
      setLoading(false)
    }).finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Container>
          <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>A Blog with Appwrite</div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
