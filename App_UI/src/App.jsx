import { useState } from 'react'
import background_image_one from './images/background_image_one.jpg'
import { Routes, Route, Navigate} from 'react-router-dom'

import LoginCard from './pages/LoginCard'
import Registration from './pages/Registration'
import HomePage from './pages/HomePage'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Member from './pages/Member'
import Collection from './pages/Collection'
import Navbar from './utils/Navbar'

import './App.css'

function App() {
  // 1. Track if the user is logged in. 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // A simple function to simulate logging in (pass this to LoginCard)
  const loginUser = () => setIsAuthenticated(true);

  return (
    <>
      <section 
        className='w-screen h-screen flex items-center bg-cover bg-center' 
        style={{
          backgroundImage: `url(${background_image_one})`
        }}
        >
      
        {isAuthenticated && <Navbar />}

        <Navbar />

        <Routes>
          {/* Unauthenticated Routes */}
          <Route 
            path='/login' 
            element={!isAuthenticated ? <LoginCard onLogin={loginUser} /> : <Navigate to="/" />} 
          />
          <Route 
            path='/register' 
            element={!isAuthenticated ? <Registration /> : <Navigate to="/" />} 
          />

          {/* Authenticated (Protected) Routes */}
          <Route 
            path='/' 
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/explore' 
            element={isAuthenticated ? <Explore /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/collection' 
            element={isAuthenticated ? <Collection /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/profile' 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/member' 
            element={isAuthenticated ? <Member /> : <Navigate to="/login" />} 
          />

          {/* Fallback for any unknown URLs */}
          <Route path='*' element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>

      </section>
    </>
  )
}

export default App
